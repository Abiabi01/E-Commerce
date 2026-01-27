import { useEffect, useState } from 'react';

/**
 * Custom hook for fetching data
 * @param {string} url - URL to fetch from
 * @returns {object} Data, loading, and error states
 */
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url, { signal: controller.signal });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to fetch data');
          console.error('Fetch error:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup: abort fetch if component unmounts
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};
