import { View, Text, TextInput, TextInputComponent, StyleSheet} from 'react-native';
import  {CustomTextInput}  from '../looks/customComponents';
/**a component, which is, which is a function
 * structure is/ was
 * const i i don't know
 * so, i just looked it app, and the export function way works, i guess the
 * const that i'm thinking off but have no idea, have, mmh, have no idea of implementing
 * you export at the end, and it has all other bullshit importing and stuff
mbio, mbio what do i need here
first a input, hadi sikumbiki how they are called not inputbox, aah! something
before going in on it, the data
for the phonenumber - string, don't know if string huku has a capital S. Eric just shut-up
and a password - i guess this can take many forms. We will check that out
props would have been amazing, no gruesome to remember and check out again but both of this are state yeah
nah, we will start with props
*/
export default function Account(){
    return(
        <View style={styles.one}> 
        <View style={styles.two}>
            <CustomTextInput
            label={<Text>What's your number</Text>}
            placeHolder='phone number' 
            onChangeText={(hold)=>{}}
            value=''
            touchableText='continue'
            /> 
            </View>          
        </View>
    )
}
const styles = StyleSheet.create({
    one:{
        justifyContent:'center',
    },
    two:{
        margin:10,
    }
})
