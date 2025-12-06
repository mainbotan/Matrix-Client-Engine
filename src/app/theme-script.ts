// Это отдельный файл для скрипта, который будет использоваться inline
export const themeScript = `
  (function() {
    try {
      // Устанавливаем тему ДО рендеринга страницы
      var savedTheme = localStorage.getItem('theme');
      var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var theme = savedTheme || systemTheme;
      
      // Применяем сразу, чтобы не было мерцания
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
      
      // Обновляем meta theme-color
      var metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#101010' : '#ffffff');
      }
    } catch (e) {
      // При ошибке ставим темную тему по умолчанию
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    }
  })();
`;