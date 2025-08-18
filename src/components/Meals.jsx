import useMeals from "../hooks/useMeals";
import MealItem from "./MealItem";
import Error from "./UI/Error";

const Meals = () => {
  const { meals, loading, error } = useMeals();

  if (loading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error.message} />;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
