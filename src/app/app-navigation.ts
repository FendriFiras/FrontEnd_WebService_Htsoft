export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home',
  },
  { text: 'Profile', path: '/profile', icon: 'user' },
  {
    text: 'Articles',
    icon: 'folder',
    items: [],
  },
  {
    text: 'Ventes',
    icon: 'cart',
    items: [
      {
        text: 'Commande Client',
        path: '/commandeClt',
      },
    ],
  },
  {
    text: 'Stock',
    icon: 'contentlayout',
    items: [
      {
        text: 'Stock Depot',
        path: '/stockDepot',
      },
    ],
  },
];
