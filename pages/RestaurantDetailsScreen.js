import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
    SafeAreaFrameContext,
    SafeAreaView,
} from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";
import { GoBackButton } from "../components/Buttons";
import * as Colors from "../styles/Colors";

const RestaurantDetailsScreen = ({ navigation, route }) => {
    const item = route.params;
    const favoriteRestaurants = useSelector(
        (state) => state.RestaurantReducer.favoriteRestaurants
    );
    const dispatch = useDispatch();
    return (
        <SafeAreaView
            style={{
                backgroundColor: Colors.primary,
                flex: 1,
                paddingBottom: 10,
            }}
        >
            <GoBackButton
                title="Restaurant Details"
                navigation={navigation}
                color="white"
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                scrollEnabled={true}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 280,
                    }}
                >
                    {item.image ? (
                        <Image
                            source={{ uri: item.image.url }}
                            style={{
                                width: "100%",
                                height: "100%",
                                resizeMode: "cover",
                            }}
                        />
                    ) : (
                        <Image
                            source={require("../assets/random.jpg")}
                            style={{
                                width: "100%",
                                height: "100%",
                                resizeMode: "cover",
                            }}
                        />
                    )}
                </View>
                <View style={Styles.details}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text style={Styles.ItemName}>{item.name}</Text>
                        <View style={Styles.IconContainer}>
                            {favoriteRestaurants.find(
                                (restaurant) => restaurant._id === item._id
                            ) ? (
                                <Icon
                                    name="heart"
                                    size={35}
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
                                <Icon
                                    name="heart-outline"
                                    size={35}
                                    color={Colors.primary}
                                    onPress={() => {
                                        dispatch({
                                            type: "ADD_FAVORITE_RESTAURANT",
                                            payload: item,
                                        });
                                        showMessage({
                                            message:
                                                "Restaurant Added To Favorites",
                                            type: "info",
                                        });
                                    }}
                                />
                            )}
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={Styles.DetailTitle}>Location :</Text>

                        <Text style={Styles.Info}>
                            {item.addressInfo.address}
                        </Text>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={Styles.DetailTitle}>Contact :</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                gap: 10,
                                alignItems: "center",
                            }}
                        >
                            <Icon name="call" color="white" size={20} />
                            <Text style={Styles.Info}>
                                {item.contacts.phoneNumber}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                gap: 10,
                                alignItems: "center",
                            }}
                        >
                            <Icon name="mail" color="white" size={20} />
                            <Text style={Styles.Info}>
                                {item.contacts.email}
                            </Text>
                        </View>
                    </View>
                    {/* 
                    {item.services.takeaway ? (
                        item.services.takeaway.enabled == true &&
                        item.services.takeaway.schedules[0] ? (
                            <View style={{ gap: 10 }}>
                                <Text style={Styles.DetailTitle}>
                                    Take away Schedules :
                                </Text>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        gap: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: Colors.white,
                                            fontWeight: "500",
                                            fontSize: 17,
                                        }}
                                    >
                                        Starts at :{" "}
                                    </Text>
                                    <Text style={Styles.Info}>
                                        {item.services.takeaway.enabled == true
                                            ? item.services.takeaway
                                                  .schedules[0].start
                                            : "Not Available"}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        gap: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: Colors.white,
                                            fontWeight: "500",
                                            fontSize: 17,
                                        }}
                                    >
                                        Ends At :
                                    </Text>
                                    <Text style={Styles.Info}>
                                        {item.services.takeaway.enabled == true
                                            ? item.services.takeaway
                                                  .schedules[0].end
                                            : "Not Available"}
                                    </Text>
                                </View>
                            </View>
                        ) : null
                    ) : null} */}

                    {item.cuisines[0]?._id ? (
                        <View style={{ gap: 10 }}>
                            <Text style={Styles.DetailTitle}>Cuisine :</Text>
                            <Text style={Styles.Info}>
                                {item.cuisines[0].name["en"]}
                            </Text>
                        </View>
                    ) : null}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// Styles

const Styles = StyleSheet.create({
    Header: {
        alignItems: "center",
        paddingVertical: 20,
        gap: 20,
        color: Colors.white,
        flexDirection: "row",
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },
    details: {
        // height: 60,
        paddingBottom: 60,
        paddingHorizontal: 20,
        paddingTop: 40,
        height: "100%",
        backgroundColor: Colors.primary,
        gap: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -25,
        minHeight: "100%",
        overflow: "hidden",
    },
    DetailTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.white,
    },
    IconContainer: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
    },
    ItemName: {
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.white,
        textTransform: "capitalize",
        width: "80%",
    },
    Info: {
        fontSize: 18,
        color: Colors.white,
    },
});

export default RestaurantDetailsScreen;
