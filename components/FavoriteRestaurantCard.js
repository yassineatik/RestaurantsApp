import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { DELETE_FAVORITE_RESTAURANT } from "../redux/Actions";
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import { useRef } from "react";
import { IconButton } from "./Buttons";
import * as Colors from "../styles/Colors";

export default function FavoriteRestaurantCard({ item, navigation }) {
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
            </View>
            <View style={Styles.Actions}>
                <TouchableOpacity
                    style={{
                        width: "60%",
                        height: 30,
                        borderRadius: 20,
                        backgroundColor: Colors.primary,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() =>
                        navigation.navigate("RestaurantDetails", item)
                    }
                >
                    <Text
                        style={{
                            fontSize: 13,
                            fontWeight: "bold",
                            color: Colors.white,
                        }}
                    >
                        More Details
                    </Text>
                </TouchableOpacity>

                <IconButton
                    title="Remove"
                    onPress={() => {
                        dispatch({
                            type: DELETE_FAVORITE_RESTAURANT,
                            payload: item,
                        });
                        showMessage({
                            message: "Restaurant Removed From Favorites",
                            type: "default",
                        });
                    }}
                    icon={
                        <Ionicons
                            name="remove-circle-outline"
                            color={Colors.primary}
                            size={20}
                        />
                    }
                ></IconButton>
            </View>
        </View>
    );
}

const { width } = Dimensions.get("screen");
const CardWidth = width / 2 - 20;

//Styles
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
        position: "relative",
        zIndex: 1,
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        bottom: 30,
        gap: 8,
    },
});
