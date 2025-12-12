// sections.config.ts
import { ExtendedNavigationSection } from '@/assets/utils/sections';

export const navigationSections: ExtendedNavigationSection[] = [
    {
        href: '/account/organizations',
        exact: true,
        slug: 'organizations',
        guideAbout: 'Просмотр всех организаций, в которых вы состоите.',
        guideIcon: 'Collection',
        guideId: 'organizations-section',
        guidePriority: 'high',
        guidePosition: 'top'
    }
];