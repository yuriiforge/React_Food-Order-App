import useMeals from "../hooks/useMeals";

const Meals = () => {
  const { meals, loading, error } = useMeals();

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
};

export default Meals;
