const Card = ({ place }) => {
  return (
    <div className="border rounded-md p-4">
      <h1 className="font-semibold text-xl">{place.name}</h1>
      <p>{place.location}</p>
      <p>{place.rating}</p>
    </div>
  );
};

export default Card;
