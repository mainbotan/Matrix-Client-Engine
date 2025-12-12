'use client';

import { useState, useEffect } from 'react';
import Button from '@/assets/ui-kit/button/button';
import styles from './plans.module.scss';
import clsx from 'clsx';
import CheckMark from '@/assets/ui-kit/icons/check-mark';
import { plansConfig } from './plans.config';

export function Plans() {
    // Находим план по умолчанию из конфига
    const defaultPlan = plansConfig.find(plan => plan.default) || plansConfig[0];
    
    // Состояние для выбранного плана
    const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
    
    // Функция для форматирования цены с пробелами
    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    // Функция для переключения плана
    const handlePlanSelect = (planId: string) => {
        const plan = plansConfig.find(p => p.id === planId);
        if (plan) {
            setSelectedPlan(plan);
        }
    };

    // Форматируем период в зависимости от количества дней
    const formatPeriod = (days: number) => {
        if (days === 14) return '14 дней';
        if (days === 30) return '1 месяц';
        return `${days} дней`;
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.capture}>
                    Тарификация
                </div>
            </div>
            <div className={styles.inter}><span className={styles.line} /></div>
            
            <div className={styles.pricing}>
                <div className={styles.info}>
                    <div className={styles.total}>
                        <span className={styles.sum}>
                            {formatPrice(selectedPlan.price)}
                        </span>
                        <span className={styles.currency}>
                            {selectedPlan.currency}
                        </span>
                    </div>
                    <div className={styles.period}>
                        / {formatPeriod(selectedPlan.period_days)}
                    </div>
                </div>
            </div>
            
            <div className={styles.plans}>
                <div className={styles.grid}>
                    {plansConfig.map((plan) => (
                        <div 
                            key={plan.id}
                            className={clsx(
                                styles.item,
                                plan.trial && styles.trial,
                                selectedPlan.id === plan.id && styles.selected
                            )}
                            onClick={() => handlePlanSelect(plan.id)}
                        >
                            <span className={styles.triangle} />
                            <span className={styles.marker}>
                                {selectedPlan.id === plan.id && (
                                    <CheckMark className={styles.svg} />
                                )}
                            </span>
                            <div className={styles.name}>{plan.name}</div>
                            <div className={styles.price}>
                                {formatPrice(plan.price)} &#8381;
                                {plan.trial && (
                                    <span className={styles.period}>
                                        / {formatPeriod(plan.period_days)}
                                    </span>
                                )}
                            </div>
                            <div className={styles.actions}>
                                <Button 
                                    className={styles.action} 
                                    variant='contrast'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Здесь можно добавить логику для кнопки "О тарифе"
                                        console.log('Информация о тарифе:', plan);
                                    }}
                                >
                                    О тарифе
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}