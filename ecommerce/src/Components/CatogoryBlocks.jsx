import { Link } from "react-router-dom";

const categories = [
  {
    name: "Beauty",
    path: "beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    name: "Fragrance",
    path: "fragrance",
    image:
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d",
  },
  {
    name: "Furniture",
    path: "furniture",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    name: "Groceries",
    path: "groceries",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
  },
];

const CategoryBlocks = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.path}
            to={`/category/${cat.path}`}
            className="group relative h-64 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* BACKGROUND IMAGE */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* TEXT CONTENT */}
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">
                {cat.name}
              </h3>
              <p className="text-sm text-white/90 mt-1">
                Shop now →
              </p>
            </div>
          </Link>
        ))}
              </div>
    </div>
  );
};

export default CategoryBlocks;
