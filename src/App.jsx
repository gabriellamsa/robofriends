import { CardList } from "./assets/components/CardList.jsx";
import { SearchBox } from "./assets/components/SearchBox.jsx";
import { robots } from "./assets/data/data.js";

export default function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6">Robofriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}
