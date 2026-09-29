import { StyleSheet,View,Text } from "react-native"
import { Colours } from "../looks/Colours"
export const ViewScreen = () =>{
    return(
        <View style={styles.viewParent}>
            <Text>the View page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    viewParent:{
    height:'100%',
    width:'100%',
    backgroundColor:Colours.creeamish.fromCH,}
})
