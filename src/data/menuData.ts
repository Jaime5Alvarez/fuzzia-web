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
    id: 'raciones',
    name: 'Raciones',
    items: [
      {
        id: '1',
        name: 'Jamón Ibérico',
        description: 'Corte fino de jamón ibérico, intenso en aroma y sabor.',
        price: 18.90,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center',
        category: 'raciones'
      },
      {
        id: '2',
        name: 'Cecina de León',
        description: 'Delicada carne curada, llena de sabor, carácter y matices.',
        price: 20.00,
        image: '/cecina.png',
        category: 'raciones'
      },
      {
        id: '3',
        name: 'Patatas Bravas Caseras',
        description: 'Totalmente caseras, cortadas a mano y con nuestra deliciosa salsa especial.',
        price: 7.00,
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop&crop=center',
        category: 'raciones'
      },
      {
        id: '4',
        name: 'Pimientos del Padrón',
        description: 'Clásicos y perfectos para compartir.',
        price: 8.95,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
        category: 'raciones'
      },
      {
        id: '5',
        name: 'Zamburiñas',
        description: 'Un sabor marino inconfundible.',
        price: 16.80,
        image: 'https://images.unsplash.com/photo-1615800001652-dea216d9e4f7?w=400&h=300&fit=crop&crop=center',
        category: 'raciones'
      },
      {
        id: '11',
        name: 'Embuchado con Pimientos de Cristal',
        description: 'Finas rodajas de embuchado acompañadas de pimientos de cristal, que realzan todo su sabor.',
        price: 16.80,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center',
        category: 'raciones'
      }
    ]
  },
  {
    id: 'mar',
    name: 'Mar',
    items: [
      {
        id: '6',
        name: 'Morro',
        description: 'Bocados dorados y crujientes, ideales para acompañar con una caña bien fría.',
        price: 7.80,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&crop=center',
        category: 'mar'
      },
      {
        id: '7',
        name: 'Torreznos',
        description: 'Crujientes y sabrosos, con ese toque tradicional irresistible.',
        price: 7.50,
        image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&h=300&fit=crop&crop=center',
        category: 'mar'
      },
      {
        id: '8',
        name: 'Langostinos a la Plancha',
        description: 'Preparados a la plancha para resaltar su sabor natural.',
        price: 14.50,
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop&crop=center',
        category: 'mar'
      },
      {
        id: '9',
        name: 'Anchoas del Cantábrico',
        description: 'Intensas y sabrosas.',
        price: 10.80,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center',
        category: 'mar'
      },
      {
        id: '10',
        name: 'Pulpo a la Gallega',
        description: 'Muy tierno y aderezado con pimentón y patata.',
        price: 21.50,
        image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop&crop=center',
        category: 'mar'
      }
    ]
  },
  {
    id: 'conservas',
    name: 'Conservas',
    items: [
      {
        id: '12',
        name: 'Mejillones Gallegos en Escabeche',
        description: 'Seleccionados en origen, marinados en escabeche para un sabor equilibrado.',
        price: 10.80,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center',
        category: 'conservas'
      },
      {
        id: '13',
        name: 'Sardinas Milésima',
        description: 'Pequeños tesoros del mar, en conserva de la máxima calidad.',
        price: 9.95,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center',
        category: 'conservas'
      },
      {
        id: '14',
        name: 'Zamburiñas en Salsa Vieira',
        description: 'Con pan brioche, salsa de queso.',
        price: 10.85,
        image: 'https://images.unsplash.com/photo-1615800001652-dea216d9e4f7?w=400&h=300&fit=crop&crop=center',
        category: 'conservas'
      }
    ]
  },
  {
    id: 'ensaladas',
    name: 'Ensaladas',
    items: [
      {
        id: '15',
        name: 'Ensalada de Ventresca',
        description: 'Fresca y sorprendente.',
        price: 13.80,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center',
        category: 'ensaladas'
      },
      {
        id: '16',
        name: 'Ensaladilla de Mejillones en Escabeche',
        description: 'Con el toque especial de los mejillones gallegos.',
        price: 9.85,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&crop=center',
        category: 'ensaladas'
      },
      {
        id: '17',
        name: 'Ensalada de Burrata',
        description: 'Cremosidad acompañada de frescura y suavidad.',
        price: 16.50,
        image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=300&fit=crop&crop=center',
        category: 'ensaladas'
      }
    ]
  },
  {
    id: 'desayunos',
    name: 'Desayunos',
    items: [
      {
        id: 'tostada-dulce',
        name: 'Tostada dulce',
        description: 'Mantequilla y mermelada, café o infusión + mini zumo de naranja',
        price: 4.85,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center',
        category: 'desayunos'
      },
      {
        id: 'croissant-plancha',
        name: 'Croissant a la plancha',
        description: 'Mantequilla y mermelada, café o infusión + mini zumo de naranja',
        price: 4.80,
        image: 'https://images.unsplash.com/photo-1555507036-ab794f4139ba?w=400&h=300&fit=crop&crop=center',
        category: 'desayunos'
      },
      {
        id: 'reposteria',
        name: 'Repostería',
        description: 'Napolitana o mariposa o trenza, café o infusión + mini zumo de naranja',
        price: 4.70,
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop&crop=center',
        category: 'desayunos'
      },
      {
        id: 'tostada-aguacate',
        name: 'Tostada de aguacate',
        description: 'Tomate, jamón, aguacate, huevo y semillas, café o infusión + mini zumo de naranja',
        price: 4.95,
        image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=400&h=300&fit=crop&crop=center',
        category: 'desayunos'
      },
      {
        id: 'tostada-jamon',
        name: 'Tostada de jamón',
        description: 'Tomate, jamón ibérico, aceite de oliva virgen, café o infusión + mini zumo de naranja',
        price: 4.80,
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center',
        category: 'desayunos'
      },
      {
        id: 'tostada-salmon',
        name: 'Tostada de salmón ahumado',
        description: 'Aguacate, salmón ahumado, sésamo, café o infusión + mini zumo de naranja',
        price: 4.85,
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop&crop=center',
        category: 'desayunos'
      }
    ]
  }
];

export const restaurantInfo = {
  name: 'La Fuzzia',
  tagline: 'Gastrobar',
  phone: '+34 123 456 789',
  address: 'Calle Principal 123, Ciudad',
  hours: 'Lunes a Domingo: 12:00 - 23:00'
};