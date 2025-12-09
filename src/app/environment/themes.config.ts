export interface ThemeConfig {
  id: string;
  name: string;
  overview: string; // URL к изображению превью
}

export const themesConfig: ThemeConfig[] = [
  { 
    id: 'light',
    name: 'Classic Light',
    overview: '/images/themes/classic-light.png'
  },
  { 
    id: 'cherry',
    name: 'Cherry',
    overview: '/images/themes/cherry.png'
  },
  { 
    id: 'dark',
    name: 'Classic Dark',
    overview: '/images/themes/classic-dark.png'
  },
  { 
    id: 'satanic-dark',
    name: 'Satanic Dark',
    overview: '/images/themes/satanic-dark.png'
  }
];