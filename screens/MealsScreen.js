import { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import { render } from "react-dom";
import MealsList from "../components/MealsList/MealsList";


function MealsScreen ({route, navigation}) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);

  return <MealsList items={displayedMeals} />  

};

export default MealsScreen;