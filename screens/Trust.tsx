import { View, Text, StyleSheet} from 'react-native';
import { Colours } from '../looks/Colours';
const Trust = ()=>{//bado exporting, mmmh, inanikalia
    return(
        <View style={styles.viewMain}>
            <Text>stuff that require hosting!</Text>
            <Text>i.e., storage</Text>
            </View>
    )
}
const styles=StyleSheet.create({
viewMain:{
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colours.creeamish.fromCH,
},
})
export default Trust;