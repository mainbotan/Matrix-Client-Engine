// sections.map.tsx
import Account from "@/assets/ui-kit/icons/account";
import Themization from "@/assets/ui-kit/icons/themization";

export const sectionsConfig = [
    {
        href: '/account',
        exact: false,
        slug: 'account',
        icon: Account // передаем компонент, а не элемент
    },
    {
        href: '/environment',
        exact: false,
        slug: 'environment',
        icon: Themization
    }
];