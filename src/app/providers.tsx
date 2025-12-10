'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, useEffect } from 'react';
import ScrollToTop from './ScrollToTop';
import { ContextMenuProvider } from '@/lib/context-menu/ContextMenuProvider';
import { GuideProvider } from '@/lib/guide'; // Импортируем

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ContextMenuProvider>
        <GuideProvider> {/* Добавляем GuideProvider */}
          {children}
        </GuideProvider>
      </ContextMenuProvider>
      <ScrollToTop />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}