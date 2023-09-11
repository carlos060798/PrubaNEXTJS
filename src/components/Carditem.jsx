
function Card({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <img src={image} alt={title} className="h-40 w-full object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="p-4 border-t border-gray-300">
        <a href="#" className="text-blue-500 hover:underline">Más información</a>
      </div>
    </div>
  );
}

export default Card;