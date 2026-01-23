const Footbar = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            COOL SHOPPING
          </h3>
          <p className="text-sm">
            Your one-stop shop for beauty, furniture, groceries and more.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>Beauty</li>
            <li>Fragrances</li>
            <li>Furniture</li>
            <li>Groceries</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-700 py-4">
        © 2026 Cool Shopping. All rights reserved.
      </div>
    </footer>
  );
};

export default Footbar;
