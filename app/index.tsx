import { router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Dimensions } from 'react-native';

export default function HomeScreen() {
    
    const sendToTabs = () => {
        router.push("/(tabs)")
    }
    
    const sendToAdmin = () => {
        router.push("/(admin)")
    }

    return (
        <View style={styles.tela}>
            <View>
                <TouchableOpacity onPress={sendToTabs}>
                    <Text>Clica aqui</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={sendToAdmin}>
                    <Text>Clica aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({

    tela: {
        width: width,
        height: height,
        backgroundColor: '#192870'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
