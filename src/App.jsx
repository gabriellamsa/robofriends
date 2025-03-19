import { Card } from "./assets/components/Card";
import { robots } from "./assets/data/data.js";

export default function App() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    </div>
  );
}
