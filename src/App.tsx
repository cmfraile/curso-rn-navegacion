import React from 'react';
import Main from './screens/Main.screen';
import Second from './screens/Second.screen';
import Third from './screens/Third.screen';
import User from './screens/User.screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles/style';
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';

export type RootStackParams = {
  Main : undefined
  Second: undefined
  Third: undefined
  User: { id:number , nombre:string }
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Second" component={Second} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParams>()

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
          <MyDrawer/>
          <Stack.Screen name='Main' options={{title:'titulo de prueba',headerTitleStyle:styles.title}} component={Main}/>
          <Stack.Screen name='Second' options={{headerTitleStyle:styles.title}} component={Second}/>
          <Stack.Screen name='Third'  options={{headerTitleStyle:styles.title}} component={Third}/>
          <Stack.Screen name='User'   options={{headerTitleStyle:styles.title}} component={User}/>
      </Stack.Navigator>
    </NavigationContainer>

export default App