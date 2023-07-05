import { DefaultTheme } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";


function MealDetailScreen ({route, navigation}) {
    const favoriteMealsCtx = useContext(FavoritesContext);


    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    function changeFavoriteStatusHandler() {
        if(mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'heart' : "heart-outline" } color="white" onPress={changeFavoriteStatusHandler} style={styles.iconStyle} />
            }
        })
    },[navigation, changeFavoriteStatusHandler]);

    return(
        <ScrollView style={styles.rootContainer} >
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}  />
            <Text style={styles.title} > {selectedMeal.title} </Text>
           <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}  
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer} >
                <View style={styles.listContainer} >
                    <Subtitle>INGREDIENTS</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>STEPS</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
};


export default MealDetailScreen;


const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image:{
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
        color: 'white',
        justifyContent:'center',
        textAlign: 'center',
        borderColor: 8,
        backgroundColor: '#211914',
        marginTop: 10
    },
    detailText: {
        color: 'green',
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        width: '100%',
        alignItems: 'center',
    },
    iconStyle: {
       paddingRight: 8
    }
   
})