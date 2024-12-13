import React from 'react';
import { FlatList, Image, StyleSheet, Platform, View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';


export const HistoryCard = ({name, date, method, quantity, unityValue, totalValue} : {
    name: string, 
    date: string, 
    method: string,
    quantity: number,
    unityValue: number,
    totalValue: number
}) => {

    return (
        <View style={{alignItems: 'center', marginTop: 10}}>

            <View style={styles.topHistoryView}>
                <View style={styles.cardItem}>
                    <Text style={styles.bold}>Produto: </Text>
                    <Text>{name}</Text>
                </View>

                <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>

                <View style={styles.cardItem}>
                    <Text style={styles.bold}>Data: </Text>
                    <Text>{date}</Text>
                </View>

                <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>

                <View style={styles.cardItem}>
                    <Text style={styles.bold}>Método: </Text>
                    <Text>{method}</Text>
                </View>
            </View>

            <View style={styles.bottomHistoryView}>

                <View style={styles.cardItem}>
                    <Text style={styles.bold}>Quantidade: </Text>
                    <Text>{quantity}</Text>
                </View>

                <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>

                <View style={styles.cardItem}>
                    <Text style={styles.bold}>Valor unitário:</Text>
                    <Text>{unityValue}</Text>
                </View>
                
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>

                <View style={styles.cardItem}>
                    <Text style={styles.bold}>Valor Total:</Text>
                    <Text>{totalValue}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create ({

    topHistoryView: {
        backgroundColor: 'white',
        width: "90%",
        borderRadius: 5,
        padding: 15,
        gap: 3
    },
    bottomHistoryView: {
        backgroundColor: "#F29F05",
        width: '90%',
        borderRadius: 5,
        padding: 15,
        height: 120,
        position: 'relative',
        bottom: 30,
        zIndex: -1,
        justifyContent: 'flex-end',
        gap: 3,
        marginBottom: -20
    },
    cardItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bold: {
        fontWeight: 'bold'
    }
})