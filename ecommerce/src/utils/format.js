/**
 * Format price to USD currency format
 * @param {number} price - The price to format
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  if (typeof price !== 'number' || !Number.isFinite(price)) {
    return '$0.00';
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

/**
 * Format a number to 2 decimal places
 * @param {number} value - The value to format
 * @returns {number} Formatted number
 */
export const toFixed = (value, decimals = 2) => {
  const num = Number(value);
  if (!Number.isFinite(num)) return 0;
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
