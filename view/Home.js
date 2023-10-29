import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native'
import {css} from '../assets/css/Css'
export default function HomeScreen(props)
{
    console.log(props);
    return(
        <View style = {css.container2}>


            <TouchableOpacity style = {css.buton_home} onPress={()=> props.navigation.navigate('Login',{ id:30  })}>
                <Image source = {require('../assets/img/login.png') }
                
               
                
                
                />
            </TouchableOpacity>
            
            <TouchableOpacity style={css.buton_home} onPress={()=> props.navigation.navigate('Rastreio')}>
                <Image source = {require('../assets/img/location.png') }></Image>
            </TouchableOpacity>


        </View>
    )
}