import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItems = async (key: string): Promise<string[]> => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return passwords ? JSON.parse(passwords as string) : [];
        } catch (error) {
            alert("Erro ao buscar: " + error);
            return [];
        }
    };

    const saveItem = async (key: string, value: string): Promise<void> => {
        try {
            let passwords = await getItems(key);
            passwords.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
            alert("Erro ao salvar: " + error);
        }
    };

    const removeItem = async (key: string, item: string): Promise<string[]> => {
        try {
            let passwords = await getItems(key);
            passwords = passwords.filter((password) => password !== item);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
            return passwords;
        } catch (error) {
            alert("Erro ao remover: " + error);
            return [];
        }
    };

    return {
        getItems,
        saveItem,
        removeItem,
    };
};

export default useStorage;
