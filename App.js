import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';
import {FavoritesContext} from './store/context/favorites-context';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return <Drawer.Navigator 
            screenOptions={{ 
              headerStyle: { backgroundColor: '#a85a32' },
              headerTintColor: 'white',
              sceneContainerStyle: {backgroundColor: '#edc3b2'},
              drawerContentStyle: {backgroundColor:'#c2592d' },
              drawerInactiveTintColor: 'white',
              drawerActiveTintColor: '#e06e16',
              drawerActiveBackgroundColor: '#f7be92'

          }}>
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen}   
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => { 
            return <Ionicons name='list' color={color} size={size} />
          }
        }}  
      /> 
      <Drawer.Screen 
        name='Favorites' 
        component={FavoritesScreen} 
        options={{
          drawerIcon: ({color, size}) => {
            return <Ionicons name='heart' color={color} size={size} />
          }
        }}  
      /> 
    </Drawer.Navigator>
}


export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#a85a32' },
              headerTintColor: 'white', sceneContainerStyle: {backgroundColor: '#edc3b2'} }}>
            <Stack.Screen 
            name='Drawer' 
            component={DrawerNavigator} 
            options={{
              headerShown: false,
              title: 'Back'
            }}/>
            <Stack.Screen 
              name='Meals Screen' 
              component={MealsScreen} 
            />
            <Stack.Screen name='Meal Details' component={MealDetailScreen} options={{
              title: 'About the meal'
            }} />
          </Stack.Navigator>
        </NavigationContainer>
        </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
});
