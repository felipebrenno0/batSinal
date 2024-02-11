import { View, Text, Image, TextInput, Pressable} from "react-native"
import { StatusBar } from "expo-status-bar"

import styles from "./Style"
import batlogo from '../../assets/logoBatSinal.png'


export default function Form(){
    return(
        <View style={styles.container}>
            <Image source={batlogo} 
            style={styles.logo}
            />

            <View style={styles.containerForm}>
                <Text style={styles.text}>Nome</Text>
                <TextInput placeholder="Nome" style={styles.textInput}></TextInput>

                <Text style={styles.text}>Localização</Text>
                <TextInput placeholder="Local" style={styles.textInput}></TextInput>

                <Text style={styles.text}>Telefone</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="(00)0000-0000"
                    keyboardType="numeric"
                >
                </TextInput> 
                
                <Text style={styles.text}>Observação</Text>
                <TextInput 
                    style={[styles.textInput, 
                            {
                            height: 200, 
                            textAlignVertical: "top"
                            }
                        ]} 
                    placeholder="Seu texto aqui..."
                    multiline
                >
                </TextInput> 

                <Pressable style={styles.button} onPress={()=>console.log("Ativado")}>
                <Text 
                    style={styles.textButton}
                >
                Enviar
                </Text>
                </Pressable>
            </View>
            

           <StatusBar style="auto"></StatusBar> 
        </View>
    )
}