import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View , Button } from "react-native";

const Second = () => {

    const navigator = useNavigation<any>();

    useEffect(() => navigator.setOptions({
        title:'loremIpsumDolor'
    }),[])

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Hola Second</Text>
            <Button
                title='Main'
                onPress={() => navigator.navigate('Main') }
            />
            <Button
                title='Third'
                onPress={() => navigator.navigate('Third') }
            />
        </View>
    )

};

export default Second