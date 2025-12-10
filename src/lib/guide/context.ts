'use client';

import { createContext } from 'react';
import { GuideState } from './GuideStorage';

export interface GuideContextValue {
  enabled: boolean;
  toggleGuide: () => void;
  enableGuide: () => void;
  disableGuide: () => void;
  markAsSeen: (elementId: string) => void;
  state: GuideState;
}

export const GuideContext = createContext<GuideContextValue | undefined>(undefined);