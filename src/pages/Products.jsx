import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="px-10 py-20 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Spices Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <ProductCard
          image="https://source.unsplash.com/400x400/?turmeric"
          name="Turmeric Powder"
          price="120"
        />
        <ProductCard
          image="https://source.unsplash.com/400x400/?chilli"
          name="Red Chilli Powder"
          price="150"
        />
        <ProductCard
          image="https://source.unsplash.com/400x400/?cumin"
          name="Cumin Seeds"
          price="200"
        />
      </div>
    </div>
  );
}

export default Products;
