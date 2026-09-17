import { View, Text, StyleSheet} from 'react-native';
import { Colours } from '../looks/Colours';

function Listings({ route }: any) {//yea, ni :, so, the {}, ensures, ensures what, ensures many parameters. In there


    return(
        <View style={styles.viewMain}>
            <Text>listings!</Text>
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
export default Listings;