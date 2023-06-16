import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import styles from "../styles/style";

import Main from "../screens/firstAndDirt/Main.screen";
import Second from "../screens/firstAndDirt/Second.screen";
import Third from "../screens/firstAndDirt/Third.screen";
import User from "../screens/firstAndDirt/User.screen";

export type RootStackParamsFirstAndDirt = {
    Main : undefined
    Second: undefined
    Third: undefined
    User: { id:number , nombre:string }
  }
  
const Stack = createNativeStackNavigator<RootStackParamsFirstAndDirt>()

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