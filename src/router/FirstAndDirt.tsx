import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import styles from '../styles/style';

import Main from '../screens/firstAndDirt.tsx/Main.screen';
import Second from '../screens/firstAndDirt.tsx/Second.screen';
import Third from '../screens/firstAndDirt.tsx/Third.screen';
import User from '../screens/firstAndDirt.tsx/User.screen';

export type RootStackParamsFirstAndDirt = {
  Main : undefined
  Second: undefined
  Third: undefined
  User: { id:number , nombre:string }
}

const Stack = createNativeStackNavigator<RootStackParamsFirstAndDirt>()

//Clase 103 en caso de errores

const FirstAndDirt = () => 
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Main'
        screenOptions={{
          //headerShown:false,animation:'none',
          contentStyle:{
            backgroundColor:'pink'
          },
        }}
      >
          <Stack.Screen name='Main' options={{title:'titulo de prueba',headerTitleStyle:styles.title}} component={Main}/>
          <Stack.Screen name='Second' options={{headerTitleStyle:styles.title}} component={Second}/>
          <Stack.Screen name='Third'  options={{headerTitleStyle:styles.title}} component={Third}/>
          <Stack.Screen name='User'   options={{headerTitleStyle:styles.title}} component={User}/>
      </Stack.Navigator>
    </NavigationContainer>

export default FirstAndDirt