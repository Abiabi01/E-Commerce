/**
 * API Configuration
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://dummyjson.com';

/**
 * Cart limits
 */
export const MAX_QUANTITY = 999;
export const MIN_QUANTITY = 1;

/**
 * Product categories
 */
export const CATEGORIES = [
  {
    name: "Beauty",
    path: "beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    name: "Fragrance",
    path: "fragrances",
    image: "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d",
  },
  {
    name: "Furniture",
    path: "furniture",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    name: "Groceries",
    path: "groceries",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
  },
];

/**
 * Pagination
 */
export const ITEMS_PER_PAGE = 20;
export const FEATURED_LIMIT = 8;

/**
 * Debounce delay (ms)
 */
export const SEARCH_DEBOUNCE_DELAY = 300;

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  FETCH_FAILED: 'Failed to fetch data. Please try again.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  PASSWORDS_MISMATCH: 'Passwords do not match.',
  REQUIRED_FIELD: 'This field is required.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
};
