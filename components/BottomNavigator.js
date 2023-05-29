import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import FavoritesScreen from "../pages/FavoritesScreen";
import * as Colors from "../styles/Colors";

const BottomNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#efb810",
                tabBarInactiveTintColor: "black",

                tabBarStyle: [
                    {
                        display: "flex",
                        height: 50,
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                ],
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ color }) => screenOptions(route, color),
            })}
            initialRouteName="None"
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="home"
                            color={Colors.primary}
                            size={28}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="heart"
                            color={Colors.primary}
                            size={28}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default BottomNavigator;
