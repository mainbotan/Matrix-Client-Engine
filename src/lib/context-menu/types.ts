export type ActionHandler<T = any> = (context: ActionContext<T>) => void | Promise<void>;

export interface ActionContext<T = any> {
  target: T;
  event?: MouseEvent;
  menu?: { x: number; y: number };
}

export interface Action<T = any> {
  id: string;
  label: string;
  icon?: React.ReactNode;
  handler: ActionHandler<T>;
  shortcut?: string;
  disabled?: boolean;
  condition?: (context: ActionContext<T>) => boolean;
  danger?: boolean;
  group?: string;
}

export interface ContextMenuState<T = any> {
  isOpen: boolean;
  x: number;
  y: number;
  actions: Action<T>[];
  target?: T;
  meta?: Record<string, any>;
}

export interface ContextMenuContextValue {
  openMenu: <T>(options: OpenMenuOptions<T>) => void;
  closeMenu: () => void;
  state: ContextMenuState;
}

export interface OpenMenuOptions<T = any> {
  x: number;
  y: number;
  target: T;
  actions: Action<T>[];
  meta?: Record<string, any>;
}

export interface ContextMenuProviderProps {
  children: React.ReactNode;
}

export interface UseContextMenuOptions<T = any> {
  actions?: Action<T>[];
  condition?: (context: ActionContext<T>) => boolean;
}