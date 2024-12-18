import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Dimensions } from 'react-native';

export const FlowCard = ({tipo, titulo, cliente, valor, data} : {tipo: string, titulo: string, cliente: string, valor: number, data: string}) => {
    
    return (
        <View style={{backgroundColor: '#D9D9D960', justifyContent: 'center', width: '100%', padding: 20, borderRadius: 5, marginBottom: 10}}>
            <View>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{titulo}</Text>
                <View style={{backgroundColor: 'white', height: 1}}>

                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>{tipo === "Entrada" ? "Cliente: " : "Empresa: "}</Text>
                    <Text style={{color: 'white'}}>{cliente}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold', color: 'white'}}>Valor: </Text>
                        <Text style={{color: 'white'}}>R${valor}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold', color: 'white'}}>Data: </Text>
                        <Text style={{color: 'white'}}>{data}</Text>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: (tipo === "Entrada" ? 'green' : 'red'), width: 8, height: '100%', position: 'absolute', left: 0, borderRadius: 5}}>

            </View>
        </View>
    )
}