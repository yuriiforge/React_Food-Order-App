import useMeals from "../hooks/useMeals";
import MealItem from "./MealItem";

const Meals = () => {
  const { meals, loading, error } = useMeals();

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
