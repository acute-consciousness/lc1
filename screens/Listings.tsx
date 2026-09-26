import { View, Text, StyleSheet, FlatList} from 'react-native';
import { Colours } from '../looks/Colours';
import { Test } from '../serverState/fetchListings';

import { CustomTouchableOpacity } from '../looks/customComponents';

const theTestFunction =()=>{
    Test();
}

const Listings = () =>{//yea, ni :, so, the {}, ensures, ensures what, ensures many parameters. In there

    return(
        <View style={styles.viewMain}>
            
            <CustomTouchableOpacity
            placeHolder='Test'
            onPress={theTestFunction}
            />
            
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