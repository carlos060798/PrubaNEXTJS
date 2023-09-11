import Card from "./Carditem";

function CardList() {
  const cards = [
    {
      id: 1,
      title: 'Tarjeta 1',
      description: 'Esta es la descripción de la Tarjeta 1. Puedes agregar más detalles aquí.',
      image: '/imagen1.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 2,
      title: 'Tarjeta 2',
      description: 'Esta es la descripción de la Tarjeta 2. Puedes agregar más detalles aquí.',
      image: '/imagen2.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 3,
      title: 'Tarjeta 3',
      description: 'Esta es la descripción de la Tarjeta 3. Puedes agregar más detalles aquí.',
      image: '/imagen3.jpg', // Reemplaza con la URL de la imagen real
    },
  ];

  return (
    <div className="flex flex-wrap">
      {cards.map((card) => (
        <div key={card.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <Card title={card.title} description={card.description} image={card.image} />
        </div>
      ))}
    </div>
  );
}

export default CardList;