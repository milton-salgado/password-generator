import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

interface PasswordItemProps {
    data: string;
    removePassword: () => void;
}

export const PasswordItem = ({ data, removePassword }: PasswordItemProps) => {
    const [visibile, setVisible] = useState(true);

    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            {visibile ? (
                <Text style={styles.text}>{data}</Text>
            ) : (
                <View style={styles.passwordBar}></View>
            )}
            <Pressable onPress={() => setVisible(!visibile)}>
                <Ionicons
                    name={visibile ? "eye-outline" : "eye-off-outline"}
                    size={26}
                    color="white"
                />
            </Pressable>
        </Pressable>
    );
};

export default PasswordItem;

const styles = StyleSheet.create({
    container: {
        padding: 14,
        backgroundColor: "#0E0E0E",
        width: "100%",
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    passwordBar: {
        width: "45%",
        padding: 8,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
    },
});
