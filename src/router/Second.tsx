import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import FirstScreen from "../screens/Second/FirstScreen";
import SecondScreen from "../screens/Second/SecondScreen";

export type RootStackParamsSecond = {
    First : undefined ,
    Second : undefined
}

const Stack = createNativeStackNavigator<RootStackParamsSecond>();

const SecondRoute = () => 
    <NavigationContainer>
        <Stack.Navigator initialRouteName="First">
            <Stack.Screen name='First' component={FirstScreen}/>
            <Stack.Screen name='Second' component={SecondScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

export default SecondRoute



/*
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
*/

