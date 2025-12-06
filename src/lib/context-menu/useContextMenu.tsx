'use client';

import { useCallback } from 'react';
import { Action, ActionContext, ActionHandler } from '@/lib/context-menu/types';
import { useGlobalContextMenu } from './ContextMenuProvider';
import { predefinedActions } from '@/lib/context-menu/core';

// Простой хелпер для фиксированных действий
export function useSimpleContextMenu<T = any>(
  actions: Action<T>[],
  options?: {
    preventDefault?: boolean;
    stopPropagation?: boolean;
    className?: string;
    minimal?: boolean;
  }
) {
  return useContextMenu(() => actions, options);
}

// Хук для блока с предопределёнными действиями
export function useContextMenuForBlock<T extends { id: string; name?: string }>(
  customActions?: Action<T>[],
  options?: {
    copyText?: (target: T) => string;
    onEdit?: (context: ActionContext<T>) => void;
    onDelete?: (context: ActionContext<T>) => void;
    onDuplicate?: (context: ActionContext<T>) => void;
    preventDefault?: boolean;
    stopPropagation?: boolean;
    className?: string;
    minimal?: boolean;
  }
) {
  const getActions = useCallback((target: T): Action<T>[] => {
    const baseActions: Action<T>[] = [];

    // Добавляем копирование, если есть что копировать
    if (options?.copyText) {
      baseActions.push(predefinedActions.copy(options.copyText));
    }

    // Добавляем другие действия если есть обработчики
    if (options?.onEdit) {
      baseActions.push(predefinedActions.edit(options.onEdit));
    }

    if (options?.onDuplicate) {
      baseActions.push(predefinedActions.duplicate(options.onDuplicate));
    }

    if (options?.onDelete) {
      baseActions.push(predefinedActions.delete(options.onDelete));
    }

    // Добавляем кастомные действия
    if (customActions) {
      baseActions.push(...customActions);
    }

    return baseActions;
  }, [customActions, options]);

  return useContextMenu(getActions, {
    preventDefault: options?.preventDefault,
    stopPropagation: options?.stopPropagation,
    className: options?.className,
    minimal: options?.minimal,
  });
}

// Самый минимальный хук - для быстрого теста
export function useQuickContextMenu<T = any>(
  label: string,
  handler: ActionHandler<T>,
  options?: {
    preventDefault?: boolean;
    stopPropagation?: boolean;
    className?: string;
    minimal?: boolean;
  }
) {
  return useSimpleContextMenu(
    [{
      id: 'quick-action',
      label,
      handler,
    }],
    options
  );
}

// Хук для добавления класса триггера
export function useContextMenu<T = any>(
  getActions: (target: T) => Action<T>[],
  options?: {
    preventDefault?: boolean;
    stopPropagation?: boolean;
    className?: string;
    minimal?: boolean;
  }
) {
  const { openMenu } = useGlobalContextMenu();
  const { 
    preventDefault = true, 
    stopPropagation = true,
    className = '',
    minimal = false
  } = options || {};

  const handleContextMenu = useCallback((e: React.MouseEvent, target: T) => {
    if (preventDefault) e.preventDefault();
    if (stopPropagation) e.stopPropagation();

    const actions = getActions(target);
    if (!actions.length) return;

    openMenu({
      x: e.pageX,
      y: e.pageY,
      target,
      actions,
      meta: { minimal }, // Передаем настройку в меню
    });
  }, [openMenu, getActions]);

  return { 
    onContextMenu: handleContextMenu,
    triggerClassName: `contextMenuTrigger ${className} ${minimal ? 'minimal' : ''}`.trim()
  };
}

// Пример использования с компонентом
function ExampleComponent({ item }: { item: any }) {
  const { onContextMenu, triggerClassName } = useContextMenu(
    () => [
      { id: 'copy', label: 'Копировать', handler: () => {} },
      { id: 'delete', label: 'Удалить', handler: () => {}, danger: true },
    ],
    { className: 'my-custom-class', minimal: true }
  );

  return (
    <div 
      onContextMenu={(e) => onContextMenu(e, item)}
      className={triggerClassName}
    >
      Кликни ПКМ
    </div>
  );
}