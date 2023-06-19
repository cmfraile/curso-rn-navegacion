import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from '../screens/Second/FirstScreen';
import SecondScreen from '../screens/Second/SecondScreen';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();

const CustomIcon = () => 
  <Image
    source={require('../assets/burger.png')}
    style={{width:30,height:30}}
  />

const DrawerApp = () => {
  return (
    <Drawer.Navigator 
      initialRouteName='First'
      screenOptions={{
        drawerIcon:(props) => <CustomIcon/>,
        drawerType:'permanent'
      }}
    >
      <Drawer.Screen name="First" component={FirstScreen} />
      <Drawer.Screen name="Second" component={SecondScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerApp