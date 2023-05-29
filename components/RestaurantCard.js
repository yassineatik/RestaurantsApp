import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { showMessage } from "react-native-flash-message";
import { DetailsButton } from "./Buttons";
import * as Colors from "../styles/Colors";

export default function RestaurantCard({ item, navigation }) {
    const { favoriteRestaurants } = useSelector(
        (state) => state.RestaurantReducer
    );
    const dispatch = useDispatch();

    return (
        <View style={Styles.Card}>
            <View style={{ alignItems: "center", top: -55, height: 130 }}>
                {item.image ? (
                    <Image
                        source={{ uri: item.image.url }}
                        style={Styles.image}
                    />
                ) : (
                    <Image
                        source={require("../assets/random.jpg")}
                        style={Styles.image}
                    />
                )}
            </View>
            <View
                style={{
                    marginHorizontal: 5,
                    top: -35,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 45,
                }}
            >
                <Text style={Styles.restaurantName}>{item.name}</Text>
                {item.mealType ? (
                    <Text style={Styles.mealType}>{item.mealType}</Text>
                ) : (
                    <Text style={Styles.mealType}>No meal Available</Text>
                )}
            </View>
            <View style={Styles.Actions}>
                <DetailsButton
                    title="View Details"
                    onPress={() =>
                        navigation.navigate("RestaurantDetails", item)
                    }
                />

                <View style={Styles.FavoriteBtn}>
                    {favoriteRestaurants.find(
                        (restaurant) => restaurant._id === item._id
                    ) ? (
                        <Ionicons
                            name="heart"
                            size={30}
                            color={Colors.primary}
                            onPress={() => {
                                dispatch({
                                    type: "DELETE_FAVORITE_RESTAURANT",
                                    payload: item,
                                });
                                showMessage({
                                    message:
                                        "Restaurant Removed From Favorites",
                                    type: "default",
                                });
                            }}
                        />
                    ) : (
                        <Ionicons
                            name="heart-outline"
                            size={30}
                            color={Colors.primary}
                            onPress={() => {
                                dispatch({
                                    type: "ADD_FAVORITE_RESTAURANT",
                                    payload: item,
                                });
                                showMessage({
                                    message: "Restaurant Added To Favorites",
                                    type: "success",
                                });
                            }}
                        />
                    )}
                </View>
            </View>
        </View>
    );
}

const { width } = Dimensions.get("screen");
const CardWidth = width / 2 - 20;
const Styles = StyleSheet.create({
    Card: {
        height: 220,
        width: CardWidth,
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 60,
        borderRadius: 15,
        alignItems: "center",
        elevation: 13,
        backgroundColor: Colors.white,
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "capitalize",
    },
    mealType: {
        fontSize: 15,
        textAlign: "center",
    },
    FavoriteBtn: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 80,
    },
    Actions: {
        width: "100%",
        marginTop: 0,
        marginHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        bottom: 0,
    },
});
