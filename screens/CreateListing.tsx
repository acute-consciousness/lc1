import { View, Text, StyleSheet} from 'react-native';
import { Colours } from '../looks/Colours';
const CreateListing= ()=>{//bado exporting, mmmh, inanikalia
    return(
        <View style={styles.viewMain}>
            <Text>Create a post</Text>
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
export default CreateListing;