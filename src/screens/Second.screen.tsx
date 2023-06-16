import { useNavigation } from "@react-navigation/native";
import { Text, View , Button } from "react-native";

const Second = () => {

    const { navigate } = useNavigation<{navigate:(value:string) => void}>();

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Hola Second</Text>
            <Button
                title='Main'
                onPress={() => navigate('Main') }
            />
            <Button
                title='Third'
                onPress={() => navigate('Third') }
            />
        </View>
    )

};

export default Second