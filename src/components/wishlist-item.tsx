'use client';

import { useState, useEffect } from 'react';
import type { WishlistItemType } from '@/lib/wishlist-data';
import { getThumbnailAction } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Gift, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function WishlistItem({ item }: { item: WishlistItemType }) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFadeIn, setHasFadeIn] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    // The thumbnail fetching logic is kept for structure, but it will always result in a placeholder.
    async function fetchThumbnail() {
        if (isMounted) {
          // No need to call the action, we will just use the placeholder.
          setThumbnailUrl(null);
          setIsLoading(false);
        }
    }

    fetchThumbnail();

    const timer = setTimeout(() => {
        if (isMounted) {
            setHasFadeIn(true);
        }
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [item.url, item.description]);

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
          {isLoading ? (
            <Skeleton className="h-full w-full" />
          ) : (
            <Image
              src={thumbnailUrl || `https://placehold.co/600x400.png`}
              alt={`Thumbnail for ${item.name}`}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint="product photo"
            />
          )}
        </div>
        <CardDescription>{item.description}</CardDescription>
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
