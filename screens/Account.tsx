import { View, Text, StyleSheet, TextInputSubmitEditingEvent } from 'react-native';
import  {CustomTextInput}  from '../looks/customComponents';
import { useState } from 'react';
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
nakumbuka now, state goes from parent component, parent, mmh, parent, mmh, parent component to child/children
*/
export default function Account(){
    /**pro, probably tuna, tuna, tunadefine state hapa */
    const [text,setText]=useState('');//maybe it's an empty string <--this is just an extension of my mind talking
    const onSubmit = (e:TextInputSubmitEditingEvent)=>{ // even that native can tell javascript, javascript, javascript ,mmh, that i has been hit
        const nowSnapshot = e.nativeEvent.text;//replace text with value, let as name value text. remember we don't use the setState identifier
        console.log(nowSnapshot);
    }
    return(
        <View style={styles.one}> 
        <View style={styles.two}>
            <CustomTextInput
            label={<Text>enter mobile number</Text>}
            placeHolder='+254 *********' 
            value={text}
            onChangeText={setText}//before checking on the error we are being flagged, at last after the 'done' is hit, that is when, that is when what, the user input will be set to state?
            onSubmitEditing={onSubmit}
            touchableText='continue'
            /> 
            <View>
                <Text></Text>
            </View>
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
