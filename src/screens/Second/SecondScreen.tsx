import { View , Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const SecondScreen = () => {

    //Este hook tiene las dimensiones para que se vea todo de forma segura, es decir,
    const insets = useSafeAreaInsets()

    return(
        <View style={{flex:1}}>
            <Text>Second WORKS</Text>
        </View>
    )

}

export default SecondScreen