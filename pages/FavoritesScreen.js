import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Text } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import FavoriteRestaurantCard from "../components/FavoriteRestaurantCard";
import { GoBackButton } from "../components/Buttons";
import * as Colors from "../styles/Colors";
const FavoritesScreen = ({ navigation }) => {
    const favoriteRestaurants = useSelector(
        (state) => state.RestaurantReducer.favoriteRestaurants
    );
    return (
        <SafeAreaView
            style={{
                backgroundColor: Colors.white,
                flex: 1,
                minHeight: 500,
                overflow: "visible",
            }}
        >
            <GoBackButton
                title="Favorites"
                navigation={navigation}
                color="black"
            />
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {favoriteRestaurants.length > 0 ? (
                    <FlatList
                        data={favoriteRestaurants}
                        renderItem={({ item }) => (
                            <FavoriteRestaurantCard
                                item={item}
                                navigation={navigation}
                            />
                        )}
                        keyExtractor={(item) => item._id}
                        numColumns={2}
                    />
                ) : (
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "500",
                            textAlign: "center",
                            paddingHorizontal: 20,
                        }}
                    >
                        You don't have any favorite restaurants yet.
                    </Text>
                )}
            </View>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    Header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
});

export default FavoritesScreen;
