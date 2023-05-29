import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Colors from "../styles/Colors";

export function PrimaryButton({ title, onPress }) {
    return (
        <TouchableOpacity style={Styles.PrimaryButton} onPress={onPress}>
            <Text style={Styles.PrimaryButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export function IconButton({ title, onPress, icon }) {
    return (
        <TouchableOpacity style={Styles.RemoveButton} onPress={onPress}>
            <Text style={{ color: Colors.primary }}>{title}</Text>
            {icon}
        </TouchableOpacity>
    );
}

export function DetailsButton({ title, onPress }) {
    return (
        <TouchableOpacity style={Styles.DetailsButton} onPress={onPress}>
            <Text
                style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    color: Colors.white,
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
export function GoBackButton({ title, navigation, color }) {
    return (
        <View style={Styles.Header}>
            <Icon
                name="arrow-back"
                size={25}
                color={color}
                onPress={() => navigation.goBack()}
            />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: color,
                }}
            >
                {title}
            </Text>
        </View>
    );
}

// Styles

const Styles = StyleSheet.create({
    PrimaryButton: {
        alignItems: "center",
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 30,
        marginVertical: 10,
        height: 50,
        justifyContent: "center",
    },
    PrimaryButtonText: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: "bold",
    },
    Header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    RemoveButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: Colors.primary,
        borderWidth: 1,
        width: "60%",
    },
    DetailsButton: {
        width: "60%",
        height: 30,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
});
