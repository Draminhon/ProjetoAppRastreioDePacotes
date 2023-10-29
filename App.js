
import { StatusBar } from 'expo-status-bar';
import { Text, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, RastreioScreen} from './view/Index'

 const Stack = createNativeStackNavigator();

export default function App() {

 

  return (
    
      <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name="Home" component={HomeScreen} 

         options= {{
          title: "Bem-vindo",
         headerStyle:{backgroundColor: "#F58634"},
         headerTitleAlign: 'center',
         headerTitleStyle:{fontWeight:'bold'}
        
          }}/>

        <Stack.Screen name="Login" component={LoginScreen} 
        
        options= {{
          headerShown: false

          }}/>
        
        <Stack.Screen name="Rastreio" component={RastreioScreen} />
      {/*  <Stack.Screen name="AreaRestrita" component={RastreioScreen} />*/}
      
      </Stack.Navigator>
    </NavigationContainer>
   
     
  );

 
}

