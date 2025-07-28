export type WishlistItemType = {
  id: number;
  name: string;
  description: string;
  url: string;
  price?: number;
};

export const wishlistItems: WishlistItemType[] = [
  {
    id: 1,
    name: 'High-Quality Standing Desk',
    description: 'An electric standing desk with memory presets. Helps with posture during long work hours.',
    url: 'https://www.upliftdesk.com/uplift-v2-standing-desk-v2-or-v2-commercial/',
    price: 799,
  },
  {
    id: 2,
    name: 'Ergonomic Office Chair',
    description: 'A comfortable and supportive chair for long sessions of work or gaming, with adjustable lumbar support.',
    url: 'https://store.hermanmiller.com/gaming-chairs/embody-gaming-chair/2517590.html',
    price: 1795,
  },
  {
    id: 3,
    name: 'Noise-Cancelling Headphones',
    description: 'Wireless over-ear headphones with active noise cancellation to help focus in noisy environments.',
    url: 'https://www.sony.com/electronics/headband-headphones/wh-1000xm5',
    price: 399,
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'A tactile and satisfying keyboard for typing. Preferably with hot-swappable switches.',
    url: 'https://www.keychron.com/products/keychron-q1-pro-qmk-via-wireless-custom-mechanical-keyboard',
    price: 199,
  },
  {
    id: 5,
    name: '4K Ultrawide Monitor',
    description: 'A large, high-resolution monitor to improve productivity and provide an immersive experience.',
    url: 'https://www.dell.com/en-us/shop/dell-ultrasharp-40-curved-wuhd-monitor-u4025qw/apd/210-bmdp/monitors-monitor-accessories',
    price: 2399,
  },
  {
    id: 6,
    name: 'A Good Book on Design',
    description: '"The Design of Everyday Things" by Don Norman. A classic on user-centered design.',
    url: 'https://www.nngroup.com/books/design-of-everyday-things-revised/',
    price: 30,
  },
];
