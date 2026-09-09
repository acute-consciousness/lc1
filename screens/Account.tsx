import { View, Text, StyleSheet, TextInputSubmitEditingEvent, Keyboard } from 'react-native';
import  {CustomTextInput, ReturnError}  from '../looks/customComponents';
import { useState } from 'react';
import { Colours } from '../looks/Colours';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AccountToRouteParam from './Types';
//i don't need to import Profile or OTP here, i think, or i'm interpretating  at the moment the reason for the root navigat..in the roote App.tsx, at runtime... it recognizes maybe 
//just chaeck on the naming on the configs in Navigation.tsx 
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
//so the 'interface?', so, mmh, so, mmmh, so the interface ...to define the route param, i think for parameter,or is it here arguement? types
//
export default function Account(){
    /**pro, probably tuna, tuna, tunadefine state hapa */
    const [text,setText]=useState('');//maybe it's an empty string <--this is just an extension of my mind talking
    const [disable, setEnable]=useState<boolean>(true);//state starts, mmh, as disabled is true, state, mmh, state starts as disabled is tru
    const navigation = useNavigation<NativeStackNavigationProp<AccountToRouteParam>>();//outside the parathesis because we are defining, or issuing a type
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
        if(charInpt.length ==9){
            setEnable(false);

    }
    else if(charInpt==''){
        setEnable(true);
    }
    else if(charInpt==null){
        setEnable(true);
    }
    else setEnable(true);//this i didn't think off, but it's not precisely ati turning back but also more like there when limit is not set

}



// this whole structure, mmh, hadi nimeanguka

    const onPressFnct = async() =>{//it is the whole function async, i'm telling myself that, that, that, that we will see if, if i change it later
        console.log({text});//the {"text":"0700000000"} as for now, we need a string to be the body, not, mmh, not this format, not this format. Checked it out na wanasema, checked, mmh, checked it out na wanasema
        //na bpp recommends we just pass the state, no deep layering, deep layering stuff
        //so let chek the format it will be logged out with. I think it will just be the same
        //yea, still the same
        Keyboard.dismiss();//should have the ()..right now i'm like whatever, i could say it is, it is because, it, it is a function.. but the autocomplete should hel with this
        //continuing
        try{
            //then, then, then hapa the response, i will actuall name it response, mmh, and see if, and, mmh, and see if us
            // ing that name
            //using that, using that, using that name fits it
            // the word key imetoka wapi, defo know it's not from my backend but i don't have the
            // urge to look it up. Just have it intyur head Eric that, that, it is supposed to be, tha
            // that it is supposed to be there,so not await into parenthesis?, venye tu async, async ili, ilistickiwa hapo
            /**this is another day
             * nakumbuka the last time w, we worked on the fect,.. the connection thing...what?
             * ..that post had to go with post but i didn't understand this, but found out for a string, 'key
             * even though i don;t know i'm calling it a key but i can POST to GET, don't mmh, don't know about the cap
             * but i can POST to a string, i.e, i.e, for a 'check-uP' but i can't post an objet to a get
             * tries o use post and i had difficulties so i resulted to get as it can do that, but, but this is ntot recommended because ita show
             * up like that url we saw for whatapp, kwa imixwhatilike. anyway we are using it
             * without checking the controller function, it exceots a string, i set it up that way
             * so what i added fro bpp suggestion was, what, a ATsignRequestPara then the type parameter
             * and then here in the client
             * have the endpoint then ? question maek doler sign  in {} the, the state, mmh, the state in this case
             * the, the, the, the, the state in this case **key=
             * na hata sijui the error responses za web servers
            */
            const apiResponse = await fetch(`http://192.168.2.13:8080/users/verifyuser?key=${text}`);//another error, i hope it is the last, but i should use te/verifyuser?key=${text} sawa `` si the typically used '' ``
            const responseStatus = apiResponse.status;//so, i, i ,i mmh, i tested it out and  it has i.e 200 so a text or and integer anyway iyo hawexi, mmh,anyway iyo hai, haiwezi nilemeano (), at first thought maybe it has value right, i presume ..but let use check it out            // sasa ni JSON Parse erro: UNexpected end of input, but got an 200 respone
            console.log(apiResponse.status);
            // ati then, ati thens
            if(responseStatus===200){
                const userObjectInJson = await apiResponse.json();//that also hapa nilikueka () kwa the json,await, await, mmh, await tena,should i return the json, let return the object basi, for the test
                //i'll just, i'll just take the await meaning as i see it, wait, await
                console.log(userObjectInJson);
                                // ingekuwa onPress then a () => {a method then into {parameters}}
                {navigation.navigate('Profile',{user:userObjectInJson})}//so its my variable which uses or is equals usenavigate. dot then it has, mmh other methods
            }
            else if(responseStatus===404){//jyea, 404 mmh, yea 404 ndio connection to the server is but, but what, but in my undersanding/ i remember that if the request is a successfull but no object, 404?, it gives back a null
                const feedBack:string='did not find an account with that number';
                {navigation.navigate('OTP',{feedbackAlert:feedBack})}
            }
            else if(responseStatus===500){
                console.log("server connection error!");
            }

            //so userObjectInJson is the object we want to pass to the other screen, sawa, sawa object
            //let us just parse then, 'split', mmh, it later
            //and we need a what?, if it, mmh if it, if, mmh, if it wasn't found
        }
        catch(error){
            // <ReturnError feedBackText="Server connection error!"/>, that i can't return a jsx hapa
            console.log("failed!"+error)
        }
        
        // ama async tueke hapa?
        //we text test out na alert, mehn nimekuwa nikitaka to make that 
        //alert thing so bad
        //sawa,
        //map
        /*so how do we approach the network thing 
        the first thing niliona akifanya ni
        obviously there, there, there is the fetch function
        fetch
        json
        promise
        asyn, await
        try...and catch the error
        yea, izi, izi, izi, izi ndio naweza kumbuka, so, so, so
        should i have these whole fnction within async, mmh, async, await, async
        async, async, async, async, mmmh, async, mmh, async means asynchronous
        should this be asynchronous, i think so, then await is for the fetch and 
        stuff
        */
    }

    return(
        <View style={styles.one}> 
        <View></View>
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
              keyboardType="phone-pad"
              disabled={disable}
              onPress={onPressFnct}//so onPress should, mmh, so onPress should be the one navigating, right
              //to navigate .. navigation.navigate, then arguement, i think to the screen you want to go to and the object or data
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
        backgroundColor:Colours.creeamish.one,
    },
    two:{
        margin:10,
    }
})
