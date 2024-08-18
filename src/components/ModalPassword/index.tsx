import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "@/src/hooks/useStorage";

interface ModalPasswordProps {
    password: string;
    handleClose: () => void;
}

const ModalPassword = ({ password, handleClose }: ModalPasswordProps) => {
    const { saveItem } = useStorage();

    const handleCopyPassword = async () => {
        try {
            await Clipboard.setStringAsync(password);
            handleSavePassword();
        } catch (error) {
            alert("Falha ao copiar a senha. Tente novamente.");
        }
        handleClose();
    };

    const handleSavePassword = async () => {
        await saveItem("@pass", password);
        alert("Senha copiada e salva com sucesso!");
        handleClose();
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable
                    style={styles.innerPassword}
                    onLongPress={handleCopyPassword}
                >
                    <Text style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleClose}
                    >
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonSave]}
                        onPress={handleSavePassword}
                    >
                        <Text
                            style={[styles.buttonText, styles.buttonSaveText]}
                        >
                            Salvar senha
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ModalPassword;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
    },
    content: {
        backgroundColor: "#FFFFFF",
        width: "85%",
        paddingVertical: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        gap: 16,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    innerPassword: {
        backgroundColor: "#0E0E0E",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    button: {
        flex: 1,
        alignItems: "center",
        marginVertical: 14,
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
    },
    buttonSave: {
        backgroundColor: "#392DE9",
    },
    buttonSaveText: {
        color: "#FFFFFF",
    },
});
