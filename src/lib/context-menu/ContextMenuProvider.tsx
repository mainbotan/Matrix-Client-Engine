'use client';

import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { 
  ContextMenuContextValue, 
  ContextMenuState, 
  OpenMenuOptions 
} from '@/lib/context-menu/types';
import styles from './styles.module.scss';

const ContextMenuContext = createContext<ContextMenuContextValue | null>(null);

export function ContextMenuProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ContextMenuState>({
    isOpen: false,
    x: 0,
    y: 0,
    actions: [],
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const openMenu = useCallback(<T,>(options: OpenMenuOptions<T>) => {
    // Проверяем, чтобы меню не выходило за пределы экрана
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const menuWidth = 200; // Примерная ширина меню
    const menuHeight = options.actions.length * 40; // Примерная высота

    let x = options.x;
    let y = options.y;

    if (x + menuWidth > viewportWidth) {
      x = viewportWidth - menuWidth - 10;
    }
    if (y + menuHeight > viewportHeight) {
      y = viewportHeight - menuHeight - 10;
    }

    setState({
      isOpen: true,
      x,
      y,
      actions: options.actions,
      target: options.target,
      meta: options.meta,
    });

    // Автозакрытие при клике вне меню
    setTimeout(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!containerRef.current?.contains(e.target as Node)) {
          closeMenu();
          document.removeEventListener('click', handleClickOutside);
        }
      };
      document.addEventListener('click', handleClickOutside);
    }, 100);
  }, []);

  const closeMenu = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false }));
  }, []);

  const handleAction = useCallback(async (actionIndex: number) => {
    const action = state.actions[actionIndex];
    if (!action || action.disabled) return;

    try {
      await action.handler({
        target: state.target!,
        menu: { x: state.x, y: state.y },
        event: undefined, // Можно передать оригинальный event если нужно
      });
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      closeMenu();
    }
  }, [state, closeMenu]);

  return (
    <ContextMenuContext.Provider value={{ openMenu, closeMenu, state }}>
      {children}
      
      {state.isOpen && (
        <div 
          ref={containerRef}
          className={styles.container}
          style={{
            left: `${state.x}px`,
            top: `${state.y}px`,
          }}
        >
          <div className={styles.menu}>
            {state.actions.map((action, index) => (
              <button
                key={action.id}
                onClick={() => handleAction(index)}
                disabled={action.disabled}
                className={`${styles.item} ${action.danger ? styles.danger : ''} ${
                  action.disabled ? styles.disabled : ''
                }`}
              >
                {action.icon && <span className={styles.icon}>{action.icon}</span>}
                <span className={styles.label}>{action.label}</span>
                {action.shortcut && (
                  <span className={styles.shortcut}>{action.shortcut}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </ContextMenuContext.Provider>
  );
}

export const useGlobalContextMenu = () => {
  const context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error('useGlobalContextMenu must be used within ContextMenuProvider');
  }
  return context;
};