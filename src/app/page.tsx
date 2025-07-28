import { WishlistItem } from '@/components/wishlist-item';
import { wishlistItems } from '@/lib/wishlist-data';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          My Wishlist
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A curated collection of things I'd love to have.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistItems.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
