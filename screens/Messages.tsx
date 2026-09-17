import { View, Text, StyleSheet} from 'react-native';
import { Colours } from '../looks/Colours';
const Messages = ()=>{//bado exporting, mmmh, inanikalia
    return(
        <View style={styles.viewMain}>
            <Text>messages!</Text>
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
export default Messages;