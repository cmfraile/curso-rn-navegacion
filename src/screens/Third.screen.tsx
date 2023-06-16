import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View , Button } from "react-native";

const Third = () => {

    const { popToTop } = useNavigation<{popToTop:() => void}>();

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Hola Third</Text>
            <Button
                title='Second'
                onPress={() => popToTop() }
            />
        </View>
    )

};

export default Third