import React, {useState, useLayoutEffect} from "react";
import { View, Image, Text, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';

import styles from "./Style";
import batLogo from '../../assets/logoBatSinal.png'
import Form from "../Form/Form";

export default function Home({navigation}:any){
    return(
        <View style={styles.container}>
            <Image 
                source={batLogo}
                style={{
                    resizeMode: 'contain', 
                    height:250
                }}
            />

            <Pressable style={styles.button} onPress={()=>navigation.navigate('Form')}>
                <Text 
                    style={styles.text}
                >
                    
                Ativar Bat Sinal
                </Text>
            </Pressable>

            <StatusBar style="auto" />
        </View>
    )
};