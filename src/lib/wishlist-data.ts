export type WishlistItemType = {
  id: number;
  name: string;
  description: string;
  url: string;
  price?: number;
  imageUrl?: string;
};

export const wishlistItems: WishlistItemType[] = [
  {
    id: 1,
    name: 'Bow',
    description: 'A bow',
    url: 'https://a.co/d/5uuAN8J',
    price: 115,
    imageUrl: 'https://m.media-amazon.com/images/I/61UyMZG18gL._AC_SX679_.jpg'
  },
  {
    id: 2,
    name: 'Russian Hat',
    description: 'A Russian Hat',
    url: 'https://a.co/d/2mPkPVb',
    price: 95,
    imageUrl: 'https://m.media-amazon.com/images/I/51xoDJ-9wNL._AC_SX679_.jpg'
  },
  {
    id: 3,
    name: 'Beats Powerbeats Pro 2',
    description: 'Beats Powerbeats Pro 2',
    url: 'https://a.co/d/7UfIpKH',
    price: 249,
    imageUrl: 'https://m.media-amazon.com/images/I/51HOUQVBlsL._AC_SX679_.jpg'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'A mechanical keyboard',
    url: 'https://a.co/d/eAUb05B',
    price: 479,
    imageUrl: 'https://m.media-amazon.com/images/I/71IxReOfAWL._AC_SX679_.jpg'
  },
  {
    id: 5,
    name: 'Book The Legend of Zelda',
    description: 'The Legend of Zelda',
    url: 'https://a.co/d/iFbOYON',
    price: 19,
    imageUrl: 'https://m.media-amazon.com/images/I/91GPUnqBe+L._SY425_.jpg'
  },
  {
    id: 6,
    name: 'Sound hole guiatar strap',
    description: 'No link, just any that looks cool',
    url: 'https://www.google.com/search?q=Sound+hole+guiatar+strap',
    price: 30,
    imageUrl: 'https://i.ytimg.com/vi/MauZO2n9GkQ/maxresdefault.jpg'
  },
  {
    id: 7,
    name: 'Book The Simple Path to Wealth',
    description: 'Book The Simple Path to Wealth',
    url: 'https://a.co/d/aApOamo',
    price: 22,
    imageUrl: 'https://m.media-amazon.com/images/I/81DTZD2i93L._SY466_.jpg'
  },
];
