import axiosInstance from './axiosConfig';

const API = {
  /**
   * Fetch featured products
   */
  getFeaturedProducts: (limit = 8) => {
    return axiosInstance.get(`/products?limit=${limit}`);
  },

  /**
   * Fetch all products with pagination
   */
  getAllProducts: (limit = 100, skip = 0) => {
    return axiosInstance.get(`/products?limit=${limit}&skip=${skip}`);
  },

  /**
   * Search products
   */
  searchProducts: (query) => {
    return axiosInstance.get(`/products/search?q=${encodeURIComponent(query)}`);
  },

  /**
   * Get product by ID
   */
  getProductById: (id) => {
    return axiosInstance.get(`/products/${id}`);
  },

  /**
   * Get products by category
   */
  getProductsByCategory: (category) => {
    return axiosInstance.get(`/products/category/${category}`);
  },

  /**
   * Get all categories
   */
  getCategories: () => {
    return axiosInstance.get('/products/categories');
  },

  /**
   * Authentication endpoints (for future backend integration)
   */
  auth: {
    login: (email, password) => {
      return axiosInstance.post('/auth/login', { email, password });
    },

    register: (name, email, password) => {
      return axiosInstance.post('/auth/register', { name, email, password });
    },

    logout: () => {
      return axiosInstance.post('/auth/logout');
    },
  },
};

export default API;
