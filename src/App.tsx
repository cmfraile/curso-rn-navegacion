import React from 'react';
import { SafeAreaView } from 'react-native';
import Main from './screens/Main.screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

//Clase 103 en caso de errores

const App = () => 
  <SafeAreaView style={{flex:1}}>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  </SafeAreaView>

export default App