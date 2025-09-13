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
    id: 'del-mar',
    name: 'Del Mar',
    items: [
      {
        id: '11',
        name: 'Pulpo a la Gallega',
        description: 'Pulpo tierno cocido a la perfección con patatas, pimentón dulce y aceite de oliva',
        price: 16.50,
        image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop&crop=center',
        category: 'del-mar'
      },
      {
        id: '12',
        name: 'Paella de Mariscos',
        description: 'Arroz bomba con langostinos, mejillones, almejas y calamar en sofrito mediterráneo',
        price: 22.90,
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop&crop=faces',
        category: 'del-mar'
      },
      {
        id: '13',
        name: 'Lubina a la Sal',
        description: 'Lubina fresca cocinada en costra de sal marina con guarnición de verduras asadas',
        price: 19.75,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=faces',
        category: 'del-mar'
      },
      {
        id: '14',
        name: 'Gambas al Pil Pil',
        description: 'Gambas rojas salteadas en aceite de oliva con ajo, guindilla y perejil fresco',
        price: 14.80,
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop&crop=faces',
        category: 'del-mar'
      },
      {
        id: '15',
        name: 'Ceviche de Corvina',
        description: 'Corvina fresca marinada en limón con cebolla morada, cilantro y ají amarillo',
        price: 13.90,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=faces',
        category: 'del-mar'
      }
    ]
  },
  {
    id: 'raciones',
    name: 'Raciones',
    items: [
      {
        id: '16',
        name: 'Jamón Ibérico de Bellota',
        description: 'Finas lonchas de jamón ibérico de bellota 100% puro cortado a cuchillo',
        price: 18.50,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=faces',
        category: 'raciones'
      },
      {
        id: '17',
        name: 'Tabla de Quesos Manchegos',
        description: 'Selección de quesos manchegos curados, semicurados y tiernos con membrillo',
        price: 14.90,
        image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop&crop=faces',
        category: 'raciones'
      },
      {
        id: '18',
        name: 'Patatas Bravas Caseras',
        description: 'Patatas fritas con salsa brava picante y alioli casero cremoso',
        price: 6.80,
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop&crop=faces',
        category: 'raciones'
      },
      {
        id: '19',
        name: 'Croquetas de Jamón',
        description: 'Croquetas cremosas de jamón serrano rebozadas en pan rallado y fritas',
        price: 8.50,
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&crop=faces',
        category: 'raciones'
      },
      {
        id: '20',
        name: 'Pimientos de Padrón',
        description: 'Pimientos verdes de Padrón salteados con sal gorda y aceite de oliva',
        price: 7.25,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=faces',
        category: 'raciones'
      },
      {
        id: '21',
        name: 'Calamares a la Romana',
        description: 'Anillas de calamar rebozadas en harina y fritas, servidas con limón',
        price: 11.75,
        image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb38?w=400&h=300&fit=crop&crop=faces',
        category: 'raciones'
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
