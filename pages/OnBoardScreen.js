import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton } from "../components/Buttons";
import * as Colors from "../styles/Colors";
const Onboard = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: Colors.white,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                top: 10,
            }}
        >
            <View
                style={{
                    height: 400,
                    width: "100%",
                    backgroundColor: Colors.white,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    display: "flex",
                }}
            >
                <Image
                    style={{
                        height: "70%",
                        resizeMode: "contain",
                    }}
                    source={require("../assets/Onboard.png")}
                />
            </View>
            <View style={Styles.textContainer}>
                <View>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 28,
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        WeDigiTek Restaurants
                    </Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            textAlign: "center",
                            marginTop: 10,
                            color: "grey",
                        }}
                    >
                        We help you find the best restaurants in your area based
                        on your taste.
                    </Text>
                </View>
                <PrimaryButton
                    title="Get Started"
                    onPress={() => navigation.navigate("BottomNavigator")}
                />
            </View>
        </SafeAreaView>
    );
};
export default Onboard;

// Styles

const Styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: "space-around",
        paddingBottom: 40,
        paddingHorizontal: 50,
    },
});
