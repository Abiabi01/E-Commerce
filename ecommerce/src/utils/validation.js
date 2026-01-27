/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} Validation result with score and message
 */
export const validatePassword = (password) => {
  if (!password) return { valid: false, message: 'Password is required' };
  if (password.length < 6) return { valid: false, message: 'Password must be at least 6 characters' };
  if (password.length < 8) return { valid: true, score: 'weak', message: 'Consider using a stronger password' };
  if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    return { valid: true, score: 'medium', message: 'Good password' };
  }
  return { valid: true, score: 'strong', message: 'Strong password' };
};

/**
 * Validate product quantity
 * @param {number} quantity - Quantity to validate
 * @param {number} max - Maximum allowed quantity
 * @returns {boolean} True if valid
 */
export const isValidQuantity = (quantity, max = 999) => {
  const num = Number(quantity);
  return Number.isInteger(num) && num >= 1 && num <= max;
};

/**
 * Sanitize product data
 * @param {object} product - Product object to sanitize
 * @returns {object} Sanitized product
 */
export const sanitizeProduct = (product) => {
  const safeNumber = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  return {
    id: product?.id || null,
    title: product?.title || 'Untitled',
    price: safeNumber(product?.price),
    thumbnail: product?.thumbnail || '',
    description: product?.description || '',
    category: product?.category || 'General',
    rating: Math.min(5, safeNumber(product?.rating)),
    stock: Math.max(0, Math.floor(safeNumber(product?.stock))),
    discountPercentage: Math.min(100, safeNumber(product?.discountPercentage)),
  };
};
