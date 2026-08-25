import { View, Text, StyleSheet, TextInputSubmitEditingEvent } from 'react-native';
import  {CustomTextInput}  from '../looks/customComponents';
import { useState } from 'react';
/**TODO, next time
 * check the function defination, check, mmh, the fucntion defination on, on, on the split, on the, on the
 * splitt example, sawa. Alafu pia set-up, alafu pia set-up the, the, the, the, the, the opacity thing
 */
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
    const [disable, setEnable]=useState<boolean>(true);//state starts, mmh, as disabled is true, state, mmh, state starts as disabled is tru
    const onSubmit = (e:TextInputSubmitEditingEvent)=>{ // even that native can tell javascript, javascript, javascript ,mmh, that i has been hit
        if(disable==false){
            const nowSnapshot = e.nativeEvent.text;//replace text with value, let as name value text. remember we don't use the setState identifier
            console.log(nowSnapshot);// imehold iyo kitu, the whole keyboard, the, the, the whole keyboard text inputted
        }
        // else return the alert thing saying...must be = to 10
    }
    const aMethod = (charInpt:string)=>{//ooo, nilikuwa naweka the capital S string, like it is in javai so far the concentration has been for effect on continue btn, but it should
        //but it should also be on the onchangetextinput, hii onChangeTextInput waah
        setText(charInpt);
        //its, it is in, it is in onChangeText so it is live, It is live so no need for while
        if(charInpt.length ==10){
            setEnable(true);

    }
    else if(charInpt==''){
        setEnable(false);

    }
    else setEnable(false);//this i didn't think off, but it's not precisely ati turning back but also more like there when limit is not set

}
   
    return(
        <View style={styles.one}> 
        <View style={styles.two}>
            <CustomTextInput
            label={<Text>enter mobile number</Text>}
            placeHolder='+254 *********' 
            value={text}
            //char
            onChangeText={aMethod}// if it refuses try..but, i do't know
            //hopefully, hopefully, hopefully, hopefully it setText, it setText and has the value as in the charInput variable
            // it will register it, it will, it will, it will, it will register after, after it is done
            // onChange, if it was a functon, if it was a function, if, mmh, if, mmh, if it was a function
            // fingekuwa, ingekuwa function identifier(char ch){},we, we, we learnt something about onChangeText when covering split and stuff
            // (text) => {something is assigned here}
            //let us use split
            //before checking on the error we are being flagged, at last after the 'done' is hit, that is when, that is when what, the user input will be set to state?
            onSubmitEditing={onSubmit}
              touchableText='continue'
              disabled={disable}
            /> 
            <View>
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
