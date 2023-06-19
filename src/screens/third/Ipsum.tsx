import { Text } from "react-native"
import { useEffect } from "react"

const Ipsum = () => {

    useEffect(() => console.log('Ipsum CL'),[])

    return(
        <Text> Ipsum FUNCIONA </Text>
    )

}

export default Ipsum