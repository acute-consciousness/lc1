import {View,Text,TextInput,StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity,TextInputSubmitEditingEvent} from 'react-native';
import { Colours } from './Colours';
import { ReactNode } from 'react';
/**
 */
 interface TextInputProps {
    label:ReactNode;
        placeHolder:string;
        value:string;
        onChangeText:(text:string)=>void;//huku ni mazingaombwe, but guess it represents/ is a shortcut of retrun void, naah, ni mazingaombwe(arrow functions and the lot)
        onSubmitEditing:(e:TextInputSubmitEditingEvent)=>void;// type function
        touchableText:string;
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
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>{props.touchableText}</Text>
                </TouchableOpacity>

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
