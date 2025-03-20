export const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="flex justify-center my-6">
      <input
        type="search"
        placeholder="search robots"
        value={searchfield}
        onChange={searchChange}
        className="p-2 border rounded-lg shadow-sm bg-blue-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>
  );
};
