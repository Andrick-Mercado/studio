'use client';

import { useState, useEffect } from 'react';
import type { WishlistItemType } from '@/lib/wishlist-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function WishlistItem({ item }: { item: WishlistItemType }) {
  const [hasFadeIn, setHasFadeIn] = useState(false);
  const [imageSrc, setImageSrc] = useState(item.imageUrl || 'https://placehold.co/600x400.png');

  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
        if (isMounted) {
            setHasFadeIn(true);
        }
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Card className={`flex flex-col transition-opacity duration-500 ease-in-out ${hasFadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="font-headline">{item.name}</CardTitle>
          <div className="p-2 rounded-full bg-secondary">
            <Gift className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
            <Image
              src={imageSrc}
              alt={`Thumbnail for ${item.name}`}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint="product photo"
              onError={() => setImageSrc('https://placehold.co/600x400.png')}
            />
        </div>
        <CardDescription>{item.description}</CardDescription>
        {item.price && (
          <p className="text-lg font-semibold text-foreground">
            {formatPrice(item.price)}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="default">
          <Link href={item.url} target="_blank" rel="noopener noreferrer">
            Visit Site
            <ArrowUpRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
