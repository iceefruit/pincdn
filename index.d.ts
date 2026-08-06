export type Category = 
  | "girls" 
  | "boys" 
  | "anime" 
  | "couples" 
  | "banners" 
  | "wallpapers" 
  | "server-icons";

/**
 * Get a random image URL for a category.
 * @param category The category to pick an image from.
 * @returns A Promise that resolves to the full raw GitHub URL of a random image.
 */
export function random(category: Category): Promise<string>;

/**
 * Get a direct image URL for a specific index.
 * @param category The category of the image.
 * @param n The index of the image (0-999).
 * @returns The full raw GitHub URL of the image.
 */
export function url(category: Category, n: number): string;
