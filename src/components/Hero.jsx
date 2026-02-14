function Hero() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Pure & Organic Indian Spices
        </h1>
        <p className="mb-6 text-lg">
          Bringing Authentic Taste to Your Kitchen
        </p>
        <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Explore Products
        </button>
      </div>
    </div>
  );
}

export default Hero;
