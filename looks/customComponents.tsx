import {View,Text,TextInput,StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity,TextInputSubmitEditingEvent} from 'react-native';
import { Colours } from './Colours';
import { ReactNode } from 'react';
/**
 * waaahh, what a hustle that was. what a hustle that was
 * i'll reflect on it later. i'll, i'll, i'll reflect in it later, now
 * what the disable thing
 * now where will it be , to me it must be in the account file as, as, as, as what
 * as the state thing thins and stuff. Walai, walai, walai, walai javascript
 */
 interface TextInputProps {
    label?:ReactNode;// just remiding myself, just reminding myself of, myself of ReactNode type element
    // ah, natukiweza pitisha onChange, mmh, onchange hapa. zii, juu what we want is it's value
        placeHolder?:string;
        value?:string;
        onChangeText?:(e:any)=>void;//huku ni mazingaombwe, but guess it represents/ is a shortcut of retrun void, naah, ni mazingaombwe(arrow functions and the lot). void? hadi, void?, void?, void? hadi kama, hadi kama itarudisha vitu? Mazinga, mazingaobwe braaH
        onSubmitEditing?:(e:any)=>void;// type function
        touchableText?:string;
        disabled?:boolean;//nikienka onChange, mmh, nikieka onChange hapa, it, it, it says it, it says it refers, it refers to a value
        // walai, walai, walai, walai javascript
    }

   const CustomTouchableOpacity = (props:TextInputProps)=> {
        return (
            // nothing related to what is below, disable property. bpp - that it can be done even on, on, on, on a touchable
            // onPress and opacity. i think onPress is for clickable, ok, we, ok, we will play with them
            // sasa, sasa, sasa, sasa ukule tucall, sasa,sasa ukuje tucall iyou function huku
            // how do we go about that
            // bila hadi kuangalia further, mmh, i think i know where i'm going wrong. it from, it's, mmh, it's from the understanding
            /* what did i, what did i want to say, jsut check if disable works, works and, and, and, and, and check out what it does
            but nilikuwa nataka kusema, the value true or false can just be passed in the accounts file
            changing the style, changing, mmh, changing, mmmh, changing the styles is what, is what, is what brought me here*/
   <TouchableOpacity style={styles.btn} disabled={props.disabled}>//what about props.onchange. But we haven't defined this
                    <Text style={styles.btnText}>{props.touchableText}</Text>
                </TouchableOpacity>

        )
    }

   const CustomTextInput = (props:TextInputProps) =>{
        return(
        <View style={styles.viewMain}>

            <View style={styles.viewOne}>
            <Text style={styles.label}>{props.label}</Text>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <View style={styles.TwoThree}>

            <View style={styles.viewTwo} >
                   <TextInput style={styles.input}
            placeholder={props.placeHolder}
            value={props.value}
            onChangeText={props.onChangeText}
            onSubmitEditing={props.onSubmitEditing} 
            />
            </View>

            <View style={styles.viewThree}>
               <CustomTouchableOpacity 
               disabled={props.disabled} 
               touchableText={props.touchableText}/>
            </View>

            </View>

            </KeyboardAvoidingView>
            </View>
        )

    }

    const styles = StyleSheet.create({
        viewMain:{
        height:'100%',
        flexDirection:'column'
        },

        viewOne:{
            height:'30%',
            justifyContent: 'center',
            width: '100%',
            // alignItems:'center', 
            
        },

        label:{
            marginTop:'auto',
            marginBottom:5,
            // fontFamily:'',
            fontSize: 24,
            fontWeight: '500',
            color: Colours.blacks.openLibrary,
            // textAlign: 'center',
        },

        TwoThree:{
            height:'70%',
            flexDirection: 'column',
            width: '100%',  
        },

        viewTwo:{
              width: '100%',
        },

        input:{
           fontSize: 13,
           fontWeight: '400',
           backgroundColor:Colours.thatIlike.lighter,
           color: Colours.blacks.clubHPlaceholders,
           borderRadius:4,
           borderWidth: 0.4,
           borderBottomWidth:0.4,
           borderBottomColor: '#E0E0E0',
           paddingTop:20,
           paddingVertical:20,//acts as padding bottom
           paddingHorizontal:25,
           width: '100%',          
        },

        viewThree:{
            width: '100%',
               alignItems: 'center', // Aligns "next" to the right - but i didn't want that
    marginTop: 'auto', //what did this do again
    marginBottom:30,
        },
        btn:{
            backgroundColor:Colours.blues.openLibrary,
           paddingVertical: 15,
    paddingHorizontal: 50,  
    borderRadius:4,
        },
        btnText:{
              fontSize: 14,
    fontWeight: '600',
    color: Colours.creeamish.fromCH, // Standard iOS Blue
        }

    })
    export {CustomTextInput};
