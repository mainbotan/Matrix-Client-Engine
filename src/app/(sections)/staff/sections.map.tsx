import Branching from "@/assets/ui-kit/icons/branching";
import Hiring from "@/assets/ui-kit/icons/hiring";
import Roles from "@/assets/ui-kit/icons/roles";
import Star from "@/assets/ui-kit/icons/star";
import Team from "@/assets/ui-kit/icons/team";

export const sectionsConfig = [
  {
    slug: '',
    href: '/staff',
    title: 'Все сотрудники',
    icon: Team,
    exact: true
  },
  {
    slug: 'groups',
    href: '/staff/groups',
    title: 'Отделы & Команды',
    icon: Branching
  },
  {
    slug: 'rating',
    href: '/staff/rating',
    title: 'Рейтинг',
    icon: Star
  },
  {
    slug: 'roles',
    href: '/staff/roles',
    title: 'Роли & Обязанности',
    icon: Roles
  },
  {
    slug: 'hiring',
    href: '/staff/hiring',
    title: 'Источники наёма',
    icon: Hiring
  }
];