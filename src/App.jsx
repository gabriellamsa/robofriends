import { useState } from "react";
import { CardList } from "./assets/components/CardList.jsx";
import { SearchBox } from "./assets/components/SearchBox.jsx";
import { robots } from "./assets/data/data.js";

export default function App() {
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    console.log(event);
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6">Robofriends</h1>
      <SearchBox searchfield={searchField} searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
}
