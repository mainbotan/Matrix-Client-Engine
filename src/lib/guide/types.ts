export interface GuideElementData {
  about: string;
  icon?: string;
  id?: string;
  priority?: 'low' | 'medium' | 'high';
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export interface GuideTooltipProps extends GuideElementData {
  targetRect: DOMRect;
  visible: boolean;
}