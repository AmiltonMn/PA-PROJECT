import React from 'react';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Dimensions } from 'react-native';


export const MyHeader = ({text} : {text: String}) => {

    return (
        <View style={styles.imageView}>
            <Image style={styles.image} source={require("@/assets/images/FERramentariaBaixo.png")}/>
            <Text style={styles.headerTitle}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    image: {
        width: 150,
        height: 150
    },
    imageView: {
        backgroundColor: '#F29F05',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        position: 'sticky',
        top: 0,
        zIndex: 10
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 35
    }
})