
function Card({title,body,id}) {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      
      <div className="p-4">
        <h2 className="text-xl font-bold">{id}{title}</h2>
        <p className="text-gray-600">{body}</p>
      </div>
      <div className="p-4 border-t border-gray-300">
        <a href="#" className="text-blue-500 hover:underline">Más información</a>
      </div>
    </div>
  );
}

export default Card;