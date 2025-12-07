export interface ThemeConfig {
  id: string;
  name: string;
  overview: string; // URL к изображению превью
}

export const themesConfig: ThemeConfig[] = [
  { 
    id: 'light',
    name: 'Classic Light',
    overview: '' // Здесь будет URL к изображению
  },
  { 
    id: 'cherry',
    name: 'Cherry',
    overview: '' // Здесь будет URL к изображению
  },
  { 
    id: 'dark',
    name: 'Classic Dark',
    overview: '' // Здесь будет URL к изображению
  },
  { 
    id: 'satanic-dark',
    name: 'Satanic Dark',
    overview: '' // Здесь будет URL к изображению
  }
];