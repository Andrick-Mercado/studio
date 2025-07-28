'use server';

// This function is no longer AI-powered and will return an empty string.
export async function getThumbnailAction(input: { url: string, itemDescription: string }): Promise<{ thumbnailDataUri: string }> {
  // Returns an empty string to allow the frontend to use a placeholder.
  return { thumbnailDataUri: '' };
}
