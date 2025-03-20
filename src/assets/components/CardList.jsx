import { Card } from "./Card";

export const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return (
    <div className="flex flex-wrap justify-center p-4">{cardComponent} </div>
  );
};
