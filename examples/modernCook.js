const ModernChef = () => {
  const [dish, setDish] = React.useState("Empty Plate");

  const cookDish = () => setDish("Cooked Meal");

  return <h1>{dish}</h1>;
};
