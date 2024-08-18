import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { characters } from "../../constants/constants";
import ModalPassword from "../../components/ModalPassword";

const Home = () => {
    const [size, setSize] = useState(10);
    const [password, setPassword] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const generatePassword = () => {
        let password = "";
        for (let i = 0; i < size; i++)
            password += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );

        setPassword(password);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/logo.png")}
                style={styles.logo}
            />

            <Text style={styles.title}>{size} caracteres</Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor="#FF2626"
                    minimumTrackTintColor="#BBBBBB"
                    thumbTintColor="#008577"
                    onValueChange={(value) =>
                        setSize(parseInt(value.toFixed(0)))
                    }
                    value={size}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
            >
                <ModalPassword
                    password={password}
                    handleClose={() => setModalVisible(false)}
                />
            </Modal>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
    },
    logo: {
        marginBottom: 40,
        width: 250,
        height: 250,
    },
    area: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 6,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#392DE9",
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
    },
});
