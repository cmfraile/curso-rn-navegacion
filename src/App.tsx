import React from 'react';
import { SafeAreaView } from 'react-native';
import Main from './screens/Main.screen';
import Second from './screens/Second.screen';
import Third from './screens/Third.screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

//Clase 103 en caso de errores

const App = () => 
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown:false}}
      >
          <Stack.Screen name='Home' component={Main}/>
          <Stack.Screen name='Second' component={Second}/>
          <Stack.Screen name='Third' component={Third}/>
      </Stack.Navigator>
    </NavigationContainer>

export default App