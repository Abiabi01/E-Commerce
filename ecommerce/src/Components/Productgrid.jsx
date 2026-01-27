import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const ProductsGrid = ({ products, loading = false }) => {
  // LOADING STATE
  if (loading) {
    return <Spinner size="md" />;
  }

  // EMPTY STATE
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p className="text-lg">No products found</p>
        <p className="text-sm mt-2">Try adjusting your search filters</p>
      </div>
    );
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
