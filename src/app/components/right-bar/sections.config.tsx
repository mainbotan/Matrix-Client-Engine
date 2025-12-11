// sections.map.tsx
import Account from "@/assets/ui-kit/icons/account";
import Themization from "@/assets/ui-kit/icons/themization";

export const sectionsConfig = [
    {
        href: '/account',
        exact: false,
        slug: 'account',
        icon: Account,
        guideAbout: 'Управление аккаунтом. Здесь находятся все базовые настройки, связанные только с вашим аккаунтом пользователя, а не конкретной организацией.'
    },
    {
        href: '/environment',
        exact: false,
        slug: 'environment',
        icon: Themization,
        guideAbout: 'Здесь находятся настройки окружения. Адаптируйте внешний вид под себя.'
    }
];