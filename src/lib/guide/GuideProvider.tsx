'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { GuideContext } from './context';
import { GuideStorage, GuideState } from './GuideStorage';
import GuideTooltip from './GuideTooltip';
import { GuideElementData } from './types';
import './styles/guide.global.scss'; // Импортируем глобальные стили

export default function GuideProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GuideState>(() => GuideStorage.getState());
  const [currentElement, setCurrentElement] = useState<GuideElementData | null>(null);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [visible, setVisible] = useState(false);
  
  const timeoutRef = useRef<NodeJS.Timeout>();
  const currentTargetRef = useRef<HTMLElement | null>(null);

  const updateState = useCallback((newState: Partial<GuideState>) => {
    setState(prev => {
      const updated = { ...prev, ...newState };
      GuideStorage.setState(updated);
      return updated;
    });
  }, []);

  const toggleGuide = useCallback(() => {
    updateState({ enabled: !state.enabled });
  }, [state.enabled, updateState]);

  const enableGuide = useCallback(() => {
    updateState({ enabled: true });
  }, [updateState]);

  const disableGuide = useCallback(() => {
    updateState({ enabled: false });
    setCurrentElement(null);
    setVisible(false);
  }, [updateState]);

  const markAsSeen = useCallback((elementId: string) => {
    const newSeen = new Set(state.seenElements);
    newSeen.add(elementId);
    updateState({ seenElements: newSeen });
  }, [state.seenElements, updateState]);

  // Обработчик мыши
  useEffect(() => {
    if (!state.enabled) {
      setCurrentElement(null);
      setVisible(false);
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const guideElement = target.closest('[data-guide-about]') as HTMLElement;

      if (!guideElement) {
        clearTimeout(timeoutRef.current);
        setVisible(false);
        currentTargetRef.current = null;
        return;
      }

      if (guideElement !== currentTargetRef.current) {
        clearTimeout(timeoutRef.current);
        currentTargetRef.current = guideElement;
        
        const about = guideElement.dataset.guideAbout;
        const icon = guideElement.dataset.guideIcon;
        const id = guideElement.dataset.guideId;
        const priority = guideElement.dataset.guidePriority as 'low' | 'medium' | 'high';
        const position = guideElement.dataset.guidePosition as 'top' | 'bottom' | 'left' | 'right';

        if (about) {
          timeoutRef.current = setTimeout(() => {
            setCurrentElement({
              about,
              icon,
              id,
              priority,
              position
            });
            setTargetRect(guideElement.getBoundingClientRect());
            setVisible(true);
            
            if (id && !state.seenElements.has(id)) {
              markAsSeen(id);
            }
          }, 300); // Задержка перед показом
        }
      }
    };

    const handleMouseLeave = () => {
      clearTimeout(timeoutRef.current);
      setVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutRef.current);
    };
  }, [state.enabled, state.seenElements, markAsSeen]);

  // Добавляем класс к body когда гид включен
  useEffect(() => {
    if (state.enabled) {
      document.body.classList.add('guide-enabled');
    } else {
      document.body.classList.remove('guide-enabled');
    }
    
    return () => {
      document.body.classList.remove('guide-enabled');
    };
  }, [state.enabled]);

  const contextValue = {
    enabled: state.enabled,
    toggleGuide,
    enableGuide,
    disableGuide,
    markAsSeen,
    state
  };

  return (
    <GuideContext.Provider value={contextValue}>
      {children}
      
      {state.enabled && currentElement && targetRect && (
        createPortal(
          <GuideTooltip
            {...currentElement}
            targetRect={targetRect}
            visible={visible}
          />,
          document.body
        )
      )}
    </GuideContext.Provider>
  );
}