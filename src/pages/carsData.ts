export interface CarData {
  id: string;
  name: string;
  path: string;
  category: 'econom' | 'comfort' | 'comfort+' | 'popular';
  image: string;
  options: Array<{ label: string; text: string }>;
}

export const carsData: CarData[] = [
  // Эконом
  {
    id: '1',
    name: 'ZEEKR X',
    path: '/zeekr-x',
    category: 'econom',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_05767_7adbaf38b6.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '40.000 ₸ / сутки' },
      { label: '2-4 дня', text: '36.000 ₸ / сутки' },
      { label: '5-15 дней', text: '32.000 ₸ / сутки' },
      { label: '16-30 дней', text: '25.000 ₸ / сутки' }
    ]
  },
  {
    id: '2',
    name: 'Chery Tiggo 7 Pro',
    path: '/chery-tiggo-7-pro',
    category: 'econom',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_06681_589e464deb.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '26.000 ₸ / сутки' },
      { label: '2-4 дня', text: '23.000 ₸ / сутки' },
      { label: '5-15 дней', text: '21.000 ₸ / сутки' },
      { label: '16-30 дней', text: '20.000 ₸ / сутки' }
    ]
  },
  {
    id: '3',
    name: 'Elantra 2024',
    path: '/elantra-2024',
    category: 'econom',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_7_M307404_b9490dc51e.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '25.000 ₸ / сутки' },
      { label: '2-4 дня', text: '23.000 ₸ / сутки' },
      { label: '5-15 дней', text: '20.000 ₸ / сутки' },
      { label: '16-30 дней', text: '18.000 ₸ / сутки' }
    ]
  },
  {
    id: '4',
    name: 'Mercedes-Benz C180 2018',
    path: '/benz-c180',
    category: 'econom',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_7_M301776_7b081a3e8f.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '40.000 ₸ / сутки' },
      { label: '2-4 дня', text: '36.000 ₸ / сутки' },
      { label: '5-15 дней', text: '32.000 ₸ / сутки' },
      { label: '16-30 дней', text: '25.000 ₸ / сутки' }
    ]
  },
  {
    id: '5',
    name: 'Kia Cerato 2024',
    path: '/kia-cerato-2024',
    category: 'econom',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_03178_3187693a77.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '25.000 ₸ / сутки' },
      { label: '2-4 дня', text: '23.000 ₸ / сутки' },
      { label: '5-15 дней', text: '20.000 ₸ / сутки' },
      { label: '16-30 дней', text: '20.000 ₸ / сутки' }
    ]
  },
  // Комфорт
  {
    id: '6',
    name: 'Lexus GX460 2021',
    path: '/lexus-gx460',
    category: 'comfort',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_08020_dd4b6e4336.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '60.000 ₸ / сутки' },
      { label: '2-4 дня', text: '55.000 ₸ / сутки' },
      { label: '5-15 дней', text: '50.000 ₸ / сутки' },
      { label: '16-30 дней', text: '40.000 ₸ / сутки' }
    ]
  },
  {
    id: '7',
    name: 'BMW 530i 2019',
    path: '/bmw-530i-2019',
    category: 'comfort',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_Syndicate2_c208fdb4c8.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '75.000 ₸ / сутки' },
      { label: '2-4 дня', text: '70.000 ₸ / сутки' },
      { label: '5-15 дней', text: '60.000 ₸ / сутки' },
      { label: '16-30 дней', text: '50.000 ₸ / сутки' }
    ]
  },
  {
    id: '8',
    name: 'Hyundai Staria 2025',
    path: '/hyundai-staria-2025',
    category: 'comfort',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Fmedium_5321553970142583244_1a42486bf6.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '75.000 ₸ / сутки' },
      { label: '2-4 дня', text: '70.000 ₸ / сутки' },
      { label: '5-15 дней', text: '90.000 ₸ / сутки' },
      { label: '16-30 дней', text: '60.000 ₸ / сутки' }
    ]
  },
  {
    id: '9',
    name: 'Lixiang Li6',
    path: '/lixiang-li6',
    category: 'comfort',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01915_469749894a.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '65.000 ₸ / сутки' },
      { label: '2-4 дня', text: '60.000 ₸ / сутки' },
      { label: '5-15 дней', text: '55.000 ₸ / сутки' },
      { label: '16-30 дней', text: '45.000 ₸ / сутки' }
    ]
  },
  {
    id: '10',
    name: 'Kia Carnival 2024',
    path: '/kia-carnival-2024',
    category: 'comfort',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01639_e98c6ee100.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '60.000 ₸ / сутки' },
      { label: '2-4 дня', text: '55.000 ₸ / сутки' },
      { label: '5-15 дней', text: '50.000 ₸ / сутки' },
      { label: '16-30 дней', text: '40.000 ₸ / сутки' }
    ]
  },
  // Комфорт+
  {
    id: '11',
    name: 'Toyota Land Cruiser 200',
    path: '/land-cruiser-200',
    category: 'comfort+',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09492_be48aaac74.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '90.000 ₸ / сутки' },
      { label: '2-4 дня', text: '85.000 ₸ / сутки' },
      { label: '5-15 дней', text: '70.000 ₸ / сутки' },
      { label: '16-30 дней', text: '60.000 ₸ / сутки' }
    ]
  },
  {
    id: '12',
    name: 'Mercedes-Benz E300 2021',
    path: '/benz-e300',
    category: 'comfort+',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09504_66bd651bbc.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '120.000 ₸ / сутки' },
      { label: '2-4 дня', text: '110.000 ₸ / сутки' },
      { label: '5-15 дней', text: '90.000 ₸ / сутки' },
      { label: '16-30 дней', text: '80.000 ₸ / сутки' }
    ]
  },
  {
    id: '13',
    name: 'BMW 530i 2023',
    path: '/bmw-530i-2023',
    category: 'comfort+',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_5422801712403570884_898fe35537.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '120.000 ₸ / сутки' },
      { label: '2-4 дня', text: '110.000 ₸ / сутки' },
      { label: '5-15 дней', text: '105.000 ₸ / сутки' },
      { label: '16-30 дней', text: '90.000 ₸ / сутки' }
    ]
  },
  {
    id: '14',
    name: 'Mercedes-Benz V220 2020',
    path: '/benz-v220',
    category: 'comfort+',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_06693_6558c3461e.jpg&w=1024&q=100',
    options: [
      { label: 'день', text: '150.000 ₸ / сутки' },
      { label: '2-4 дня', text: '140.000 ₸ / сутки' },
      { label: '5-15 дней', text: '130.000 ₸ / сутки' },
      { label: '16-30 дней', text: '110.000 ₸ / сутки' }
    ]
  },
  {
    id: '15',
    name: 'Lexus LX570 2022',
    path: '/lexus-lx570',
    category: 'comfort+',
    image: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_IMG_2309_766050f3b2.JPG&w=1024&q=100',
    options: [
      { label: 'день', text: '100.000 ₸ / сутки' },
      { label: '2-4 дня', text: '95.000 ₸ / сутки' },
      { label: '5-15 дней', text: '90.000 ₸ / сутки' },
      { label: '16-30 дней', text: '80.000 ₸ / сутки' }
    ]
  }
];
