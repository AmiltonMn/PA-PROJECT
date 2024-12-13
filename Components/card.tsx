import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Dimensions } from 'react-native';

interface ICard {
    title: string,
    valor: number,
    image: string
}

export const Card = ({title, valor, image} : ICard) => {
    const [qtd, setQtd] = useState<number>(1);

    function mais(){
        setQtd(qtd + 1);
    }

    function menos(){
        if(qtd > 1){
            setQtd(qtd - 1);
        }
    }

    return (
        <>
            <View style={styles.quadrado}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.quadrado2}>
                    <View style={styles.imagemQuadrado}>
                        <Image style={styles.image} source={require('../assets/images/tools.png')}/>
                    </View>
                    <View style={styles.quadrado3}>
                        <Text style={styles.quantidadeText}>Quantidade</Text>
                        <View style={styles.quantidade}>
                            <TouchableOpacity style={styles.simbolo} onPress={menos}>
                                <Text style={styles.simboloText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.num}>{qtd}</Text>
                            <TouchableOpacity style={styles.simbolo} onPress={mais}>
                                <Text style={styles.simboloText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.valor}>Valor</Text>
                        <View style={styles.fundo}>
                            <Text style={styles.valorText}>R${(valor * qtd).toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.botaoText}>Adicionar ao carrinho</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create ({
    imagemQuadrado: {
        backgroundColor: "#D9D9D9",
        opacity: 0.35,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        height: 190
    },
    quadrado: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        margin: 15
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
        height: 170,
        width: 140
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