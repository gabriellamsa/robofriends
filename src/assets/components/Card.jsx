export const Card = ({ id, name, email }) => {
  return (
    <div className="bg-teal-200 w-64 rounded-lg p-4 m-4 shadow-lg transition-transform transform hover:scale-105">
      <img
        alt="robots"
        src={`https://robohash.org/${id}?size=200x200`}
        className="w-full h-60 object-cover rounded-md"
      />
      <div className="text-center mt-6">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
    </div>
  );
};
