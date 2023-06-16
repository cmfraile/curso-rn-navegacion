import React from 'react';
import { SafeAreaView } from 'react-native';
import Main from './screens/Main.screen';
import Second from './screens/Second.screen';
import Third from './screens/Third.screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles/style';

const Stack = createNativeStackNavigator()

//Clase 103 en caso de errores

const App = () => 
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
          <Stack.Screen name='Third' options={{headerTitleStyle:styles.title}} component={Third}/>
      </Stack.Navigator>
    </NavigationContainer>

export default App