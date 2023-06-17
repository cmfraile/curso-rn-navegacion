import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import FirstScreen from "../screens/Second/FirstScreen";
import SecondScreen from "../screens/Second/SecondScreen";

import DrawerApp from "../components/Drawer";

export type RootStackParamsSecond = {
    First : undefined ,
    Second : undefined
}

const Stack = createNativeStackNavigator<RootStackParamsSecond>();

const SecondRoute = () => 
    <NavigationContainer>
      
      {/*
        <Stack.Navigator initialRouteName="First">
            <Stack.Screen name='First' component={FirstScreen}/>
            <Stack.Screen name='Second' component={SecondScreen}/>
        </Stack.Navigator>
      */}

      <DrawerApp/>
        
    </NavigationContainer>

export default SecondRoute