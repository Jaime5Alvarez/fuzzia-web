export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'desserts',
    name: 'Postres',
    items: [
      {
        id: '1',
        name: 'Omelette with cottage cheese and herbs',
        description: 'Deliciosa tortilla con queso cottage fresco y hierbas aromáticas',
        price: 9.00,
        image: 'https://images.unsplash.com/photo-1581873372796-2d0bd7d95fce?w=400&h=300&fit=crop&crop=faces',
        category: 'desserts'
      },
      {
        id: '2', 
        name: 'Avocado toast with poached egg',
        description: 'Pan tostado artesanal con aguacate fresco y huevo pochado perfecto',
        price: 10.50,
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop&crop=faces',
        category: 'desserts'
      },
      {
        id: '3',
        name: 'Classic omelet with cheese',
        description: 'Tortilla clásica con queso fundido y hierbas frescas de temporada',
        price: 8.40,
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop&crop=faces',
        category: 'desserts'
      },
      {
        id: '4',
        name: 'Gourmet with berries and yogurt',
        description: 'Mezcla gourmet con frutos rojos frescos y yogurt griego cremoso',
        price: 12.00,
        image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop&crop=faces',
        category: 'desserts'
      }
    ]
  },
  {
    id: 'mains',
    name: 'Platos Principales',
    items: [
      {
        id: '5',
        name: 'Pasta Carbonara Tradicional',
        description: 'Pasta casera con panceta, huevo y queso parmesano auténtico',
        price: 14.50,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=faces',
        category: 'mains'
      },
      {
        id: '6',
        name: 'Salmón a la Plancha',
        description: 'Salmón fresco con vegetales de temporada y salsa de limón',
        price: 18.90,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&crop=faces',
        category: 'mains'
      },
      {
        id: '7',
        name: 'Risotto de Hongos',
        description: 'Risotto cremoso con hongos porcini y trufa negra',
        price: 16.75,
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop&crop=faces',
        category: 'mains'
      }
    ]
  },
  {
    id: 'drinks',
    name: 'Bebidas',
    items: [
      {
        id: '8',
        name: 'Café Americano',
        description: 'Café premium de origen único con notas de chocolate',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop&crop=faces',
        category: 'drinks'
      },
      {
        id: '9',
        name: 'Smoothie Tropical',
        description: 'Batido natural con mango, piña y coco fresco',
        price: 6.80,
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop&crop=faces',
        category: 'drinks'
      },
      {
        id: '10',
        name: 'Limonada Artesanal',
        description: 'Limonada fresca con menta y jengibre, endulzada naturalmente',
        price: 4.25,
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop&crop=faces',
        category: 'drinks'
      }
    ]
  }
];

export const restaurantInfo = {
  name: 'Fuzzia',
  tagline: 'Sabores auténticos, experiencias únicas',
  phone: '+34 123 456 789',
  address: 'Calle Principal 123, Madrid',
  hours: 'Lun-Dom: 12:00 - 23:00'
};
