//ESTA LINEA DEBE DE IR EN EL APP.TSX : import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from '../screens/Second/FirstScreen';
import SecondScreen from '../screens/Second/SecondScreen';

const Drawer = createDrawerNavigator();

const DrawerApp = () => {
  return (
    <Drawer.Navigator initialRouteName='First'>
      <Drawer.Screen name="First" component={FirstScreen} />
      <Drawer.Screen name="Second" component={SecondScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerApp