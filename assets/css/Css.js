import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textPage2:{
        backgroundColor: 'orange',
        padding: 5
    },
    buton_home:{
      width: 'auto',
      height: 'auto'
    },
    darkbg:{
      backgroundColor: "#333" 
    },
    login__logomarca:{
      marginBottom: 10
    },
    login__msg:(text = 'none')=>({
      fontWeight: "bold",
      fontSize: 22,
      color: "red",
      marginTop: 5,
      marginBottom: 15,
      display: text
    }),
    login__form:{
      width: "80%"
    },
    login__input:{
      backgroundColor: "#fff",
      fontSize: 19,
      padding: 7,
      marginBottom: 15
    },
    login__buton:{
      padding: 12,
      backgroundColor: "#F58634",
      alignSelf: "center",
      borderRadius: 5
    },
    login__buttonText:{
      fontWeight: "bold",
      fontSize: 21,
      color: "#333"
    }
  });

  export {css};