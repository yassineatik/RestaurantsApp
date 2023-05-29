import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";
import "react-native-gesture-handler";
import * as Colors from "../styles/Colors";

export default function HomeScreen({ navigation }) {
    const [data, setData] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(true);

    useEffect(() => {
        axios
            .get("https://api.dev.wdtek.xyz/restaurants", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((response) => setData(response.data), setisLoading(false))
            .catch((error) => {
                console.error(error), setisLoading(false);
            });
    }, []);

    return (
        <View style={Styles.restaurantsContainer}>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={data.docs}
                    renderItem={({ item }) => (
                        <RestaurantCard item={item} navigation={navigation} />
                    )}
                    keyExtractor={(item) => item._id}
                    numColumns={2}
                />
            )}
        </View>
    );
}

// Styles
const Styles = StyleSheet.create({
    restaurantsContainer: {
        paddingVertical: 0,
        paddingTop: 50,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: Colors.secondary,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        flex: 1,
        maxHeight: "100%",
        width: "100%",
        justifyContent: "space-around",
        overflow: "hidden",
    },
});
