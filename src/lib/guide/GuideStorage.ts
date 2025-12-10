export interface GuideState {
  enabled: boolean;
  seenElements: Set<string>;
  dismissedPermanently?: boolean;
}

export class GuideStorage {
  private static readonly KEY = 'matrix-guide-state';
  private static readonly VERSION = '1.0';

  static getState(): GuideState {
    if (typeof window === 'undefined') {
      return this.getDefaultState();
    }

    try {
      const stored = localStorage.getItem(this.KEY);
      if (!stored) return this.getDefaultState();

      const parsed = JSON.parse(stored);
      if (parsed.version !== this.VERSION) {
        return this.getDefaultState();
      }

      return {
        ...parsed,
        seenElements: new Set(parsed.seenElements || [])
      };
    } catch {
      return this.getDefaultState();
    }
  }

  static setState(state: GuideState): void {
    if (typeof window === 'undefined') return;

    try {
      const serialized = {
        ...state,
        seenElements: Array.from(state.seenElements),
        version: this.VERSION
      };
      localStorage.setItem(this.KEY, JSON.stringify(serialized));
    } catch (error) {
      console.error('Failed to save guide state:', error);
    }
  }

  static setEnabled(enabled: boolean): void {
    const state = this.getState();
    state.enabled = enabled;
    this.setState(state);
  }

  static markAsSeen(elementId: string): void {
    const state = this.getState();
    state.seenElements.add(elementId);
    this.setState(state);
  }

  static reset(): void {
    this.setState(this.getDefaultState());
  }

  private static getDefaultState(): GuideState {
    return {
      enabled: false,
      seenElements: new Set(),
      dismissedPermanently: false
    };
  }
}