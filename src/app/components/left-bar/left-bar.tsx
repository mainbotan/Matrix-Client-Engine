'use client';

import styles from './left-bar.module.scss';
import clsx from 'clsx';
import Collection from '@/assets/ui-kit/icons/collection';
import Chart from '@/assets/ui-kit/icons/chart';
import Team from '@/assets/ui-kit/icons/team';
import Settings from '@/assets/ui-kit/icons/settings';
import Plus from '@/assets/ui-kit/icons/plus';
import Link from 'next/link';
import { useSimpleContextMenu } from '@/lib/context-menu/useContextMenu';
import { usePathname } from 'next/navigation';
import { isSectionActive } from '@/assets/utils/sections';
import { navigationSections } from './sections.config'; // Импортируем конфиг
import CheckMark from '@/assets/ui-kit/icons/check-mark';

// Маппинг иконок для секций
const iconComponents = {
    'Collection': Collection,
    'Chart': Chart,
    'Team': Team,
    'Settings': Settings,
    'CheckSquare': CheckMark
};

export function LeftBar() {
    const pathname = usePathname();

    const actions = [
        {
            id: 'new-tab',
            label: 'Открыть в новой вкладке',
            icon: '',
            handler: () => {
                window.location.href = '/organization/company-slug';
            },
        }
    ];
    const { onContextMenu } = useSimpleContextMenu(actions);

    // Конфиг тестовых компаний
    const testCompanies = [
        {
            id: 1,
            name: 'TechCorp',
            slug: 'techcorp',
            image: 'https://avatars.mds.yandex.net/i?id=e2d18d9333d5c26e044d19c9df0218d803ee062ab3de4165-5236580-images-thumbs&n=13',
            newsCount: 6
        }
    ];
    
    // Проверяем активна ли конкретная компания по slug
    const isCompanyActive = (companySlug: string) => {
        return pathname === `/organization/${companySlug}`;
    };

    // Фильтруем секции по приоритету или позиции (опционально)
    const topSections = navigationSections.filter(section => 
        section.guidePosition === 'top' || !section.guidePosition
    );
    
    const bottomSections = navigationSections.filter(section => 
        section.guidePosition === 'bottom'
    );

    return (
        <div className={clsx(styles.container, styles.compact)}>
            <div className={styles.grid}>
                {/* Верхние навигационные разделы */}
                <section className={styles.sections}>
                    {topSections.map((section) => {
                        const IconComponent = section.guideIcon ? 
                            iconComponents[section.guideIcon as keyof typeof iconComponents] : 
                            Collection;
                        const isActive = isSectionActive(pathname, section);
                        
                        return (
                            <Link 
                                key={section.href}
                                href={section.href}
                                className={clsx(
                                    styles.section, 
                                    isActive && styles.active
                                )}
                                data-guide-about={section.guideAbout}
                                data-guide-icon={section.guideIcon}
                                data-guide-id={section.guideId}
                                data-guide-priority={section.guidePriority}
                            >
                                <IconComponent className={styles.svg} />
                                <span className={styles.capture}>
                                    {section.slug ? 
                                        section.slug.charAt(0).toUpperCase() + section.slug.slice(1) : 
                                        'Раздел'
                                    }
                                </span>
                            </Link>
                        );
                    })}
                </section>
                
                {/* Секция организаций */}
                <section className={styles.organizations}>
                    {testCompanies.map((company) => {
                        const active = isCompanyActive(company.slug);
                        
                        return (
                            <Link 
                                key={company.id}
                                href={`/organization/${company.slug}`}
                                onContextMenu={(e) => onContextMenu(e, company.slug)}
                                className={clsx(
                                    styles.item,
                                    active && styles.active
                                )}
                            >
                                <span 
                                    className={clsx(styles.icon, styles.shaking)} 
                                    style={{backgroundImage: `url(${company.image})`}}
                                >
                                    {company.newsCount > 0 && (
                                        <span className={styles.news}>{company.newsCount}</span>
                                    )}
                                </span>
                                <span className={styles.marker} />
                            </Link>
                        );
                    })}
                    
                    <section className={styles.inter}>
                        <span className={styles.line} />
                    </section>
                    
                    <Link 
                        href='/organization/create' 
                        className={clsx(
                            styles.add,
                            pathname === '/organization/create' && styles.active
                        )}
                        data-guide-about="Создание нового рабочего пространства для организации."
                        data-guide-icon="Plus"
                    >
                        <span className={styles.circle}><Plus className={styles.svg} /></span>
                    </Link>
                </section>
            </div>
        </div>
    );
}