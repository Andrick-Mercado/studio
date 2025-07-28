'use server';
/**
 * @fileOverview A flow to generate thumbnails for wishlist items using AI if they are not readily available.
 *
 * - generateThumbnail - A function that generates a thumbnail for a given URL.
 * - GenerateThumbnailInput - The input type for the generateThumbnail function.
 * - GenerateThumbnailOutput - The return type for the generateThumbnail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateThumbnailInputSchema = z.object({
  url: z.string().describe('The URL of the wishlist item.'),
  itemDescription: z.string().describe('The description of the wishlist item.'),
});
export type GenerateThumbnailInput = z.infer<typeof GenerateThumbnailInputSchema>;

const GenerateThumbnailOutputSchema = z.object({
  thumbnailDataUri: z
    .string()
    .describe(
      'A photo of a webpage, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected description
    ),
});
export type GenerateThumbnailOutput = z.infer<typeof GenerateThumbnailOutputSchema>;

export async function generateThumbnail(input: GenerateThumbnailInput): Promise<GenerateThumbnailOutput> {
  return generateThumbnailFlow(input);
}

const generateThumbnailPrompt = ai.definePrompt({
  name: 'generateThumbnailPrompt',
  input: {schema: GenerateThumbnailInputSchema},
  output: {schema: GenerateThumbnailOutputSchema},
  prompt: `You are an AI that generates thumbnails for wishlist items.
  Given the URL and description of the item, generate a relevant thumbnail image.
  If the URL provides a suitable image, return that. Otherwise, generate a new image based on the description.

  URL: {{{url}}}
  Description: {{{itemDescription}}}

  If the URL doesn't automatically provide a good-looking image, create a thumbnail based on the provided description.
  The thumbnail should be visually appealing and representative of the item.
  The output should be a data URI of the generated image.`, // Corrected prompt content
});

const generateThumbnailFlow = ai.defineFlow(
  {
    name: 'generateThumbnailFlow',
    inputSchema: GenerateThumbnailInputSchema,
    outputSchema: GenerateThumbnailOutputSchema,
  },
  async input => {
    try {
      // Attempt to generate a thumbnail using the AI model.
      const {media} = await ai.generate({
        // IMPORTANT: ONLY the googleai/gemini-2.0-flash-preview-image-generation model is able to generate images. You MUST use exactly this model to generate images.
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: [
          {text: `Generate a thumbnail for a wishlist item with the following description: ${input.itemDescription}`},
        ],
        config: {
          responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
        },
      });

      if (media?.url) {
        return {thumbnailDataUri: media.url};
      } else {
        console.warn('No thumbnail was generated from the model.');
        return {thumbnailDataUri: ''};
      }
    } catch (error: any) {
      console.error('Error generating thumbnail:', error);
      // Return a default thumbnail or an empty string in case of an error.
      return {thumbnailDataUri: ''};
    }
  }
);
