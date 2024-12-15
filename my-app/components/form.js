import React, { useState } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);
    };

    const resetText = () => {
        setValue("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={text}
                placeholder="Впишите задачу"
                placeholderTextColor="#a0a0a0"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => addHandler(text, resetText)}
            >
                <Text style={styles.buttonText}>Добавить</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginHorizontal: 15,
    },
    input: {
        flex: 1,
        padding: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#b0bec5",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        color: "#212121",
        marginRight: 10,
    },
    button: {
        backgroundColor: "#0077b6",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        justifyContent: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "bold",
    },
});
