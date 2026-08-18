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
        console.log(nowSnapshot);// imehold iyo kitu, the whole keyboard, the, the, the whole keyboard text inputted
        

    }
    const [disable, setEnable]=useState<boolean>(true);
    const onChange = (ch:string) =>{
        const input:string = ch;
        setText(input);
        while (input.length==10) {
            if(input.length==10){
            setEnable(false); //hapa, hapa, hapa, hapa ndio, hapa ndio nilifika
             // jana, and, and, and i remember what asking how data went back to a child with props and i don't want
             // to use state even, state, state, state, if, if, if, if it's even possible
            //  a function was the bpp, a, a, a, a, a function was the bpp answer
            // ok, a function, but how do we, but, but, but how do we even do that?
            return false;
            }
            else(input.length!=10)
            { 
                setEnable(true)//{disable}; <-this, this, this was me
        }
        {/*how did we track the, how, how, how, how did we track the character back then
            we had split('with a delimeter', this had the characters in arrays
            , we can actually do split, but maybe char??
            map mapped them into pizza emoji's
            join...), so , so, so what do we, what do we, what do we learn from this
            what, what about the event thing
           so, i checked it up, i , i, i checked it up and we .length the thing we were told 
           .length, dot length, dot, dot length, that, that, that, that is where we were yesterday
           
            */} 
    }

    return(
        <View style={styles.one}> 
        <View style={styles.two}>
            <CustomTextInput
            label={<Text>enter mobile number</Text>}
            placeHolder='+254 *********' 
            value={text}
            // onChangeText={onChange}// it will register it, it will, it will, it will, it will register after, after it is done
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
}
