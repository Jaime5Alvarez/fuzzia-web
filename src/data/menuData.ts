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
        image: '/jamon-iberico.jpg',
        category: 'raciones'
      },
      {
        id: '2',
        name: 'Cecina de León',
        description: 'Delicada carne curada, llena de sabor, carácter y matices.',
        price: 20.00,
        image: '/cecina.jpg',
        category: 'raciones'
      },
      {
        id: '3',
        name: 'Patatas Bravas Caseras',
        description: 'Totalmente caseras, cortadas a mano y con nuestra deliciosa salsa especial.',
        price: 7.00,
        image: '/patatas-bravas.jpg',
        category: 'raciones'
      },
      {
        id: '4',
        name: 'Pimientos del Padrón',
        description: 'Clásicos y perfectos para compartir.',
        price: 8.95,
        image: '/pimientos-padron.jpg',
        category: 'raciones'
      },
      {
        id: '5',
        name: 'Zamburiñas',
        description: 'Un sabor marino inconfundible.',
        price: 16.80,
        image: '/zamburiñas.jpg',
        category: 'raciones'
      },
      {
        id: '11',
        name: 'Embuchado con Pimientos de Cristal',
        description: 'Finas rodajas de embuchado acompañadas de pimientos de cristal, que realzan todo su sabor.',
        price: 16.80,
        image: '/embuchado-pimientos.jpg',
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
        image: '/morro.jpg',
        category: 'mar'
      },
      {
        id: '7',
        name: 'Torreznos',
        description: 'Crujientes y sabrosos, con ese toque tradicional irresistible.',
        price: 7.50,
        image: '/torreznos.jpg',
        category: 'mar'
      },
      {
        id: '8',
        name: 'Langostinos a la Plancha',
        description: 'Preparados a la plancha para resaltar su sabor natural.',
        price: 14.50,
        image: '/langostinos-plancha.jpg',
        category: 'mar'
      },
      {
        id: '9',
        name: 'Anchoas del Cantábrico',
        description: 'Intensas y sabrosas.',
        price: 10.80,
        image: '/anchoas.jpg',
        category: 'mar'
      },
      {
        id: '10',
        name: 'Pulpo a la Gallega',
        description: 'Muy tierno y aderezado con pimentón y patata.',
        price: 21.50,
        image: '/pulpo.jpg',
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
        image: '/mejillones.jpg',
        category: 'conservas'
      },
      {
        id: '13',
        name: 'Sardinas Milésima',
        description: 'Pequeños tesoros del mar, en conserva de la máxima calidad.',
        price: 9.95,
        image: '/sardinas.jpg',
        category: 'conservas'
      },
      {
        id: '14',
        name: 'Zamburiñas en Salsa Vieira',
        description: 'Con pan brioche, salsa de queso.',
        price: 10.85,
        image: '/zamburiñas-conserva.jpg',
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
        image: '/ensalada-ventresca.jpg',
        category: 'ensaladas'
      },
      {
        id: '16',
        name: 'Ensaladilla de Mejillones en Escabeche',
        description: 'Con el toque especial de los mejillones gallegos.',
        price: 9.85,
        image: '/ensaladilla-mejillones.jpg',
        category: 'ensaladas'
      },
      {
        id: '17',
        name: 'Ensalada de Burrata',
        description: 'Cremosidad acompañada de frescura y suavidad.',
        price: 16.50,
        image: '/ensalada-burrata.jpg',
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
        image: '/tostada-dulce.jpg',
        category: 'desayunos'
      },
      {
        id: 'croissant-plancha',
        name: 'Croissant a la plancha',
        description: 'Mantequilla y mermelada, café o infusión + mini zumo de naranja',
        price: 4.80,
        image: '/croissant.avif',
        category: 'desayunos'
      },
      {
        id: 'reposteria',
        name: 'Repostería',
        description: 'Napolitana o mariposa o trenza, café o infusión + mini zumo de naranja',
        price: 4.70,
        image: '/napolitana.jpg',
        category: 'desayunos'
      },
      {
        id: 'tostada-aguacate',
        name: 'Tostada de aguacate',
        description: 'Tomate, jamón, aguacate, huevo y semillas, café o infusión + mini zumo de naranja',
        price: 4.95,
        image: '/tostada-aguacate.jpg',
        category: 'desayunos'
      },
      {
        id: 'tostada-jamon',
        name: 'Tostada de jamón',
        description: 'Tomate, jamón ibérico, aceite de oliva virgen, café o infusión + mini zumo de naranja',
        price: 4.80,
        image: '/tostada-jamon.jpg',
        category: 'desayunos'
      },
      {
        id: 'tostada-salmon',
        name: 'Tostada de salmón ahumado',
        description: 'Aguacate, salmón ahumado, sésamo, café o infusión + mini zumo de naranja',
        price: 4.85,
        image: '/tostada-salmon.jpg',
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