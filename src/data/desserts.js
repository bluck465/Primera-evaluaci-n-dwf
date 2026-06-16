export const builderOptions = {
  bases: [
    { id: 'vainilla', name: 'Bizcocho de Vainilla Francesa', color: '#FFFBEB', price: 10.0 },
    { id: 'chocolate', name: 'Bizcocho Belga de Chocolate Amargo', color: '#451A03', price: 12.0 },
    { id: 'red-velvet', name: 'Bizcocho de Red Velvet de la Casa', color: '#7F1D1D', price: 14.0 }
  ],
  fillings: [
    { id: 'moras', name: 'Crema de Moras Silvestres', color: '#A855F7', price: 5.0 },
    { id: 'maracuya', name: 'Ganache de Maracuyá Ácida', color: '#F59E0B', price: 5.5 },
    { id: 'dulce-leche', name: 'Dulce de Leche Repostero', color: '#D97706', price: 4.5 }
  ],
  toppings: [
    { id: 'hojas-oro', name: 'Láminas de Oro Comestible 24k', color: '#FCD34D', price: 8.0 },
    { id: 'lavanda', name: 'Flores de Lavanda Orgánica', color: '#D8B4FE', price: 2.5 },
    { id: 'macaron', name: 'Mini Macarons en la Cima', color: '#C084FC', price: 6.0 }
  ]
}

export const dessertCatalog = [
  {
    id: 'torta-oro-violeta',
    name: 'Torta de Oro & Violetas',
    category: 'tortas',
    description: 'Bizcocho húmedo de vainilla de Madagascar infusionado con lavanda orgánica, relleno de crema de moras silvestres y decorado con láminas de oro comestible de 24k.',
    price: 32.5,
    rating: 4.9,
    reviews: 124,
    prepTime: '24h de anticipación',
    svg: `<svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" rx="24" fill="#FAF5FF" /> <ellipse cx="100" cy="150" rx="60" ry="15" fill="#E2D9EC" /> <path d="M70 148 C70 155, 130 155, 130 148 L120 165 C120 170, 80 170, 80 165 Z" fill="#D4AF37" /> <ellipse cx="100" cy="148" rx="55" ry="8" fill="#F3E8FF" stroke="#D4AF37" stroke-width="2" /> <path d="M55 110 L55 140 C55 148, 145 148, 145 140 L145 110 Z" fill="#E9D5FF" /> </svg>`
  },
  {
    id: 'macarons-reales',
    name: 'Macarons de Lavanda & Miel',
    category: 'individuales',
    description: 'Estuches de macarons franceses artesanales crujientes por fuera y cremosos por dentro.',
    price: 14.9,
    rating: 4.8,
    reviews: 95,
    prepTime: 'Entrega Inmediata',
    svg: `<svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" rx="24" fill="#FAF5FF" /> <g transform="translate(100, 100)"> <ellipse cx="0" cy="40" rx="50" ry="10" fill="#E2D9EC" /> <g transform="translate(0, -15)"> <ellipse cx="0" cy="0" rx="35" ry="15" fill="#D8B4FE" /> </g> </g> </svg>`
  },
  {
    id: 'mousse-aurum',
    name: 'Mousse de Maracuyá Aurum',
    category: 'copas',
    description: 'Suave mousse de maracuyá sobre un crumble crujiente de almendras tostadas.',
    price: 8.5,
    rating: 5.0,
    reviews: 62,
    prepTime: 'Entrega Inmediata',
    svg: `<svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" rx="24" fill="#FAF5FF" /> <ellipse cx="100" cy="165" rx="35" ry="8" fill="#E2D9EC" /> </svg>`
  },
  {
    id: 'eclair-violet',
    name: 'Éclair Real de Moras',
    category: 'individuales',
    description: 'Masa choux clásica, rellena de crema diplomática de moras frescas.',
    price: 6.9,
    rating: 4.7,
    reviews: 78,
    prepTime: 'Entrega Inmediata',
    svg: `<svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" rx="24" fill="#FAF5FF" /> <ellipse cx="100" cy="140" rx="60" ry="10" fill="#E2D9EC" /> </svg>`
  },
  {
    id: 'cheesecake-lila',
    name: 'Cheesecake de Lavanda & Arándano',
    category: 'tortas',
    description: 'Cheesecake estilo neoyorquino con coulis de arándanos y flores orgánicas.',
    price: 28.0,
    rating: 4.9,
    reviews: 110,
    prepTime: '12h de anticipación',
    svg: `<svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" rx="24" fill="#FAF5FF" /> <ellipse cx="100" cy="150" rx="60" ry="12" fill="#E2D9EC" /> </svg>`
  },
  {
    id: 'cupcakes-gold',
    name: 'Cupcakes de Ensueño (6 uds)',
    category: 'individuales',
    description: 'Set de seis cupcakes de vainilla esponjosos rellenos de dulce de leche.',
    price: 18.0,
    rating: 4.9,
    reviews: 142,
    prepTime: '24h de anticipación',
    svg: `<svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" rx="24" fill="#FAF5FF" /> </svg>`
  }
]
