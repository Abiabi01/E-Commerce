import ProductCard from "./ProductCard";
const ProductsGrid = ({ products, loading = false }) => {

  // LOADING STATE
  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading products...
      </div>
    );
  }

  // EMPTY STATE
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No products found
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
