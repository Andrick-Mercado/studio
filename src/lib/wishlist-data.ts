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
    name: 'High-Quality Standing Desk',
    description: 'An electric standing desk with memory presets. Helps with posture during long work hours.',
    url: 'https://www.upliftdesk.com/uplift-v2-standing-desk-v2-or-v2-commercial/',
    price: 799,
    imageUrl: 'https://www.upliftdesk.com/content/img/category/uplift-v2-standing-desk-v2-or-v2-commercial-2019-09-03.jpg'
  },
  {
    id: 2,
    name: 'Ergonomic Office Chair',
    description: 'A comfortable and supportive chair for long sessions of work or gaming, with adjustable lumbar support.',
    url: 'https://store.hermanmiller.com/gaming-chairs/embody-gaming-chair/2517590.html',
    price: 1795,
    imageUrl: 'https://store.hermanmiller.com/dw/image/v2/BBBF_PRD/on/demandware.static/-/Sites-herman-miller-master-catalog/default/dw1b48995a/herman-miller/chairs/embody-gaming-chair/embody_gaming_chair_black_cyan.jpg?sw=600&sh=600&sm=fit'
  },
  {
    id: 3,
    name: 'Noise-Cancelling Headphones',
    description: 'Wireless over-ear headphones with active noise cancellation to help focus in noisy environments.',
    url: 'https://www.sony.com/electronics/headband-headphones/wh-1000xm5',
    price: 399,
    imageUrl: 'https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=660&hei=660&bgcolor=F1F5F9'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'A tactile and satisfying keyboard for typing. Preferably with hot-swappable switches.',
    url: 'https://www.keychron.com/products/keychron-q1-pro-qmk-via-wireless-custom-mechanical-keyboard',
    price: 199,
    imageUrl: 'https://www.keychron.com/cdn/shop/products/Keychron-Q1-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-for-Mac-Windows-Linux-with-knob-black-1_1800x1800.jpg?v=1679478807'
  },
  {
    id: 5,
    name: '4K Ultrawide Monitor',
    description: 'A large, high-resolution monitor to improve productivity and provide an immersive experience.',
    url: 'https://www.dell.com/en-us/shop/dell-ultrasharp-40-curved-wuhd-monitor-u4025qw/apd/210-bmdp/monitors-monitor-accessories',
    price: 2399,
    imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/output-devices/dell/monitors/u-series/u4025qw/media-gallery/monitor-u4025qw-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=573&qlt=100,0&resMode=sharp2&size=573,402'
  },
  {
    id: 6,
    name: 'A Good Book on Design',
    description: '"The Design of Everyday Things" by Don Norman. A classic on user-centered design.',
    url: 'https://www.nngroup.com/books/design-of-everyday-things-revised/',
    price: 30,
    imageUrl: 'https://www.nngroup.com/img/covers/books/doet-revised-social-media.png'
  },
];
