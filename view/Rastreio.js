import React from 'react';
import {Text, View, Button} from 'react-native'

export default function RastreioScreen(props)
{
    console.log(props);
    return(
        <View>
            <Text> Esse é o componente Rastreio!</Text>
            <Button title = "ir para login" 
            onPress={()=> props.navigation.navigate('Login',{
                id:30
    })}
            />
            
        </View>
    )
}