function ProductCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <img src={image} alt={name} className="rounded-xl h-48 w-full object-cover"/>
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-red-600 font-bold mt-2">₹ {price}</p>
      <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
