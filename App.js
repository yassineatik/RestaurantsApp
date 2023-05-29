import "react-native-gesture-handler";
import React from "react";
import HomeScreen from "./pages/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRegistry } from "react-native";
import OnBoardScreen from "./pages/OnBoardScreen";
import BottomNavigator from "./components/BottomNavigator";
import RestaurantDetailsScreen from "./pages/RestaurantDetailsScreen";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import FlashMessage from "react-native-flash-message";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={OnBoardScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Restaurants"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="BottomNavigator"
                        component={BottomNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RestaurantDetails"
                        component={RestaurantDetailsScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <FlashMessage position="bottom" />
        </Provider>
    );
}

function registerRootComponent(component) {
    AppRegistry.registerComponent("main", () => component);
}
registerRootComponent(App);
