export interface NavigationSection {
  href: string;
  exact?: boolean;
  slug?: string;
}

export const isSectionActive = (pathname: string, section: NavigationSection): boolean => {
  if (section.exact) {
    return pathname === section.href;
  }
  
  // Для вложенных путей проверяем начало пути
  return pathname.startsWith(`${section.href}/`) || pathname === section.href;
};

// Альтернативная версия с более гибкой настройкой
export const isActivePath = (
  pathname: string, 
  targetPath: string, 
  options: { exact?: boolean; trailingSlash?: boolean } = {}
): boolean => {
  const { exact = false, trailingSlash = false } = options;
  
  if (exact) {
    return pathname === targetPath;
  }
  
  // Нормализуем пути для сравнения
  const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const normalizedTarget = targetPath.endsWith('/') ? targetPath.slice(0, -1) : targetPath;
  
  return normalizedPathname.startsWith(normalizedTarget + '/') || normalizedPathname === normalizedTarget;
};