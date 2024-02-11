import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C9D6DF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
        paddingHorizontal: 20
        
    },
    logo: {
        resizeMode: 'contain', 
        height: 100,
        width: 70,
        alignSelf: 'flex-start',
    },
    containerForm: {
        flex: 1,
        alignItems: 'flex-start',
        width: '100%',
        justifyContent: 'flex-start',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
        width: '100%',
        fontSize: 20,
        paddingLeft: 10,
        paddingVertical: 5,
        marginBottom: 20,
    },
    button: {
        marginTop: 40,
        backgroundColor: "#333333",
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize:45,
        fontWeight: "bold",
        color: "white",
      },
    text: {
        margin: 4
    }
});

export default styles