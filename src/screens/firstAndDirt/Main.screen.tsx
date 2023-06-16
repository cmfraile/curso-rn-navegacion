import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View , Button } from "react-native";

interface mainProps extends NativeStackScreenProps<any,any> {}

const Main = ({navigation}:mainProps) => {

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Hola mundo</Text>
            <Button
                title='Second'
                onPress={() => navigation.navigate('Second')}
            />
        </View>
    )

};

export default Main