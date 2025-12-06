import styles from './layout.module.scss';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <div className={styles.panel}>

            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}