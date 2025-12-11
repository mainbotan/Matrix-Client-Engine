import Cloud from '@/assets/ui-kit/icons/cloud';
import Wallet from '@/assets/ui-kit/icons/wallet';
import Plus from '@/assets/ui-kit/icons/plus';
import TwoCards from '@/assets/ui-kit/icons/two-cards';
import Keyhole from '@/assets/ui-kit/icons/keyhole';
import Team from '@/assets/ui-kit/icons/team';
import Code from '@/assets/ui-kit/icons/code';
import Id from '@/assets/ui-kit/icons/id';
import Themization from '@/assets/ui-kit/icons/themization';
import Settings from '@/assets/ui-kit/icons/settings';
import Server from '@/assets/ui-kit/icons/server';
import Book from '@/assets/ui-kit/icons/book';
import Cube from '@/assets/ui-kit/icons/cube';
import Collection from '@/assets/ui-kit/icons/collection';

export const COMPONENT_ICONS = {
  Cloud,
  Wallet,
  Plus,
  TwoCards,
  Keyhole,
  Team,
  Code,
  Id,
  Themization,
  Settings,
  Server,
  Book,
  Cube,
  Collection
} as const;

export type ComponentName = keyof typeof COMPONENT_ICONS;

export function getIconComponent(name: string): React.ComponentType<any> | null {
  const iconName = name as ComponentName;
  return COMPONENT_ICONS[iconName] || null;
}