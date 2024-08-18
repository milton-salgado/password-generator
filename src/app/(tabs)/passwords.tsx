import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "@/src/hooks/useStorage";
import PasswordItem from "@/src/components/PasswordItem";

const Passwords = () => {
    const [passwordList, setPasswordList] = useState<string[]>([]);
    const focused = useIsFocused();
    const { getItems, removeItem } = useStorage();

    useEffect(() => {
        const loadPasswords = async () => {
            const passwords = await getItems("@pass");
            setPasswordList(passwords);
        };

        loadPasswords();
    }, [focused]);

    const handleDeletePassword = async (item: string) => {
        const passwords = await removeItem("@pass", item);
        setPasswordList(passwords);
    };

    return (
        <SafeAreaView style={{ flex: 1, gap: 10 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    data={passwordList}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <PasswordItem
                            data={item}
                            removePassword={() => handleDeletePassword(item)}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 10 }} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        padding: 20,
        backgroundColor: "#392DE9",
        height: 125,
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    content: {
        flex: 1,
        padding: 20,
    },
});

export default Passwords;
