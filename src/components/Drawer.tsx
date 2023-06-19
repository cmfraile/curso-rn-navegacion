import 'react-native-gesture-handler';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from '../screens/Second/FirstScreen';
import SecondScreen from '../screens/Second/SecondScreen';
import { Image, Text , View } from 'react-native';


const Drawer = createDrawerNavigator();

const CustomIcon = () => 
  <Image
    source={require('../assets/burger.png')}
    style={{width:150,height:150}}
  />

const InsideDrawer = (props:DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView style={{flex:1,backgroundColor:'red'}}>
      <View style={{flex:1,backgroundColor:'blue'}}><CustomIcon></CustomIcon></View>
    </DrawerContentScrollView>
  )

}

const DrawerApp = () => {
  return (
    <Drawer.Navigator 
      initialRouteName='First'
      drawerContent={ (props) => <InsideDrawer {...props}/> }
      screenOptions={{
        //drawerType:'permanent'
      }}
    >
      <Drawer.Screen name="First" component={FirstScreen} />
      <Drawer.Screen name="Second" component={SecondScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerApp