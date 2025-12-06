import { Action, ActionHandler } from './types';

// Предопределённые действия (можно импортировать где угодно)
export const predefinedActions = {
  copy: <T>(getValue: (target: T) => string): Action<T> => ({
    id: 'copy',
    label: 'Копировать',
    icon: '📋',
    handler: ({ target }) => navigator.clipboard.writeText(getValue(target)),
    shortcut: 'Ctrl+C',
  }),

  delete: <T>(deleteHandler: ActionHandler<T>): Action<T> => ({
    id: 'delete',
    label: 'Удалить',
    icon: '🗑️',
    handler: deleteHandler,
    danger: true,
    shortcut: 'Del',
  }),

  edit: <T>(editHandler: ActionHandler<T>): Action<T> => ({
    id: 'edit',
    label: 'Редактировать',
    icon: '✏️',
    handler: editHandler,
    shortcut: 'F2',
  }),

  duplicate: <T>(duplicateHandler: ActionHandler<T>): Action<T> => ({
    id: 'duplicate',
    label: 'Дублировать',
    icon: '📄',
    handler: duplicateHandler,
    shortcut: 'Ctrl+D',
  }),
};

// Фабрика для быстрого создания действий
export const actionFactory = {
  create: <T>(action: Omit<Action<T>, 'id'>, id?: string): Action<T> => ({
    id: id || Math.random().toString(36).substr(2, 9),
    ...action,
  }),
};