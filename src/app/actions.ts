'use server';

import { generateThumbnail, GenerateThumbnailInput, GenerateThumbnailOutput } from '@/ai/flows/generate-thumbnail';

export async function getThumbnailAction(input: GenerateThumbnailInput): Promise<GenerateThumbnailOutput> {
  try {
    const output = await generateThumbnail(input);
    return output;
  } catch (error) {
    console.error('Error in getThumbnailAction:', error);
    return { thumbnailDataUri: '' };
  }
}
