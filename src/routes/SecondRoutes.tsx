import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/second/main.screen';
import Settings from '../screens/second/settings.screen';
import MyDrawer from '../components/drawer.component';
import 'react-native-gesture-handler';

export type RootStackParamsSecond = {
    Main : undefined,
    Settings: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsSecond>()

const SecondRoutes = () =>
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{headerShown:false}}
            initialRouteName='Main'
        >

            <MyDrawer/>

            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='Settings' component={Settings} />
            
        </Stack.Navigator>
    </NavigationContainer>

export default SecondRoutes