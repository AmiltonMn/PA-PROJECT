import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Dimensions } from 'react-native';

interface ICard {
    nome: string,
    email: string,
    admin: boolean
}

export const CardUser = ({nome, email, admin} : ICard) => {

    return (
        <>
            <View style={styles.quadrado}>
                <View style={styles.imagemQuadrado}>
                    <Image style={styles.image} source={require('../assets/images/tools.png')}/>
                </View>
                <View style={styles.textos}>
                    <Text>{nome}</Text>
                    <Text>{email}</Text>
                </View>
                <View style={styles.quadrado3}>
                    {admin && 
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoText}>Tornar Admin</Text>
                    </TouchableOpacity>}
                    {admin ? <Text>Admin</Text> : <Text>Membro</Text>}
                    
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create ({
    textos: {
        alignItems: "center",
        justifyContent: "center"
    },
    imagemQuadrado: {
        backgroundColor: "#F29F05",
        width: 70,
        height: 70,
        padding: 10,
        borderRadius: 9999,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    quadrado: {
        flexDirection: "row",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        margin: 15,
        gap: 5,

    },
    title: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold"
    },
    quadrado2: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
        alignItems: "center"
    },
    image: {
        height: 50,
        width: 50
    },
    quadrado3: {
        justifyContent: "center",
        gap: 15
    },
    quantidadeText: {
        textAlign: "center",
        fontSize: 18
    },
    quantidade: {
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    num: {
        fontSize: 20
    },
    simbolo: {
        borderRadius: 99999,
        backgroundColor: "#F29F05",
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "center"
    },
    simboloText: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        color: "#FFFFFF"
    },
    valor: {
        textAlign: "center",
        fontSize: 18
    },
    fundo: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#F29F05"
    },
    valorText: {
        color: "#FFFFFF",
        textAlign: "center"
    },
    botao: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#F29F05"
    },
    botaoText: {
        color: "#FFFFFF",
        textAlign: "center"
    }
})