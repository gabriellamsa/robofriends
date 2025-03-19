export const Card = () => {
  return (
    <div className="bg-green-200 w-64 rounded-lg p-4 m-4 shadow-lg transition-transform transform hover:scale-105">
      <img
        alt="robots"
        src={`https://robohash.org/test?size=200x200`}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">name</h2>
        <p className="text-sm text-gray-600">email</p>
      </div>
    </div>
  );
};
