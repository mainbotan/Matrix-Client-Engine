export interface ThemeConfig {
  id: string;
  name: string;
  overview: string; // URL к изображению превью
  description: string;
}

export const themesConfig: ThemeConfig[] = [
  { 
    id: 'light',
    name: 'Classic Light',
    overview: '/images/themes/classic-light.png',
    description: 'Классическая светлая тема для работы в дневное время суток.'
  },
  { 
    id: 'dark',
    name: 'Classic Dark',
    overview: '/images/themes/classic-dark.png',
    description: 'Классическая тёмная тема для работы в ночное время. Бережём ваши глаза и минимализируем контрастные цвета.'
  },
  { 
    id: 'cherry',
    name: 'Cherry',
    overview: '/images/themes/cherry.png',
    description: 'Акцентные розовые оттенки. Если хочется чего-то странного.'
  },
  { 
    id: 'satanic-dark',
    name: 'Satanic Dark',
    overview: '/images/themes/satanic-dark.png',
    description: 'Тёмная тема с акцентным огненным цветом.'
  },
  { 
    id: 'green-dope',
    name: 'Green Dope',
    overview: '/images/themes/green-dope.png',
    description: 'Тёмная тема с зелёными оттенками.'
  }
];