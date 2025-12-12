'use client';

import styles from '@/app/components/loading/canvas.module.scss';
import LoadingQuads from '@/app/components/loading/loading-quads/loading-quads';
import Spinner from '@/assets/ui-kit/spinner/spinner';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
        router.push('/organization/company-slug');
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className={styles.container}>
            <div className={styles.focus}>
                <LoadingQuads />
                <div className={styles.capture}>Создаём организацию...</div>
            </div>
        </div>
    )
}