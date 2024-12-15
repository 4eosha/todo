import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity 
            style={styles.touchable}
            onPress={() => deleteHandler(el.key)}
        >
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchable: {
        alignSelf: "center",
        width: "80%",
        marginTop: 10,
    },
    text: {
        padding: 16,
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: "#caf0f8",
        borderWidth: 1,
        borderColor: "#0077b6",
        alignSelf: "center",
        width: "100%",
        fontSize: 16,
        color: "#0077b6",
        fontWeight: "500",
    },
});
