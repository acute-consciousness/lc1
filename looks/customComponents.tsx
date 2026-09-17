import {View,Text,TextInput,StyleSheet,KeyboardAvoidingView, Platform, TouchableOpacity,TextInputSubmitEditingEvent, Modal, KeyboardTypeOptions} from 'react-native';
import { Colours } from './Colours';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ReactNode } from 'react';

import { Picker } from '@react-native-picker/picker';
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';



 interface TextInputProps {
    label?:ReactNode;
        placeHolder?:string;
        value?:string;
        onChangeText?:(e:any)=>void; onSubmitEditing?:(e:any)=>void;
        touchableText?:string;
        keyboardType?:KeyboardTypeOptions;
        disabled?:boolean;
        onPress?:(e:any)=>void;
        
    }
    interface Alerters{
        feedBackText?:ReactNode,
    }

   const ReturnError = (props:Alerters)=> {
        return(
            <Modal transparent animationType="fade">
                <View style={{
                width:'100%',
                backgroundColor:Colours.creeamish.fromCH,

            }}><View style={{
                 elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
            }}>
                <Ionicons name="alert" size={24} color={Colours.reds.one} />
                <Text>{props.feedBackText}
                </Text>
                </View>
                </View>

            </Modal>
        )
    }


  

    const FeedBackAlerter = (props:Alerters)=> {
        return(
            <View style={{
                width:'100%',
                backgroundColor:Colours.creeamish.fromCH,


            }}><View style={{}}>
                //icons should be in, icons should be conditional
                <Ionicons name="checkmark-outline" size={32} color={Colours.greens.openLibrary} />
                <Ionicons name="alert" size={24} color={Colours.reds.one} />
                <Text>{props.feedBackText}
                </Text>
                </View>

            </View>
        )
    }



   const CustomTouchableOpacity = (props:TextInputProps)=> {
    let isDisabled;
    if(props.disabled){ isDisabled=props.disabled;
    }
    else{
                isDisabled=false;

    }

        return (
    
   <TouchableOpacity onPress={props.onPress} style={{
    backgroundColor:(!isDisabled==false)?Colours.blues.disableBlue:Colours.blues.openLibrary,
           paddingVertical: 15,
    paddingHorizontal: 50,  
    borderRadius:4,
    alignItems:'center'

   }}
    disabled={props.disabled}>//what about props.onchange. But we haven't defined this
                    <Text style={styles.btnText}>{props.touchableText}</Text>
                </TouchableOpacity>

        )
    }

  


    const TextInputAlone =(props:TextInputProps)=>{
        return(
            <View>
                       <TextInput style={styles.inputAlone}
            placeholder={props.placeHolder}
            value={props.value}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            onSubmitEditing={props.onSubmitEditing} 
            />
            </View>
        )
    }


     const BigTextInput =(props:TextInputProps)=>{
        return(
            <View>
                       <TextInput style={styles.bigInput}
            placeholder={props.placeHolder}
            value={props.value}
            // keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            onSubmitEditing={props.onSubmitEditing} 
            multiline={true}//so it is just this
            numberOfLines={9}
            autoCorrect={false}
          
            />
            </View>
        )
    }


   const CustomTextInput = (props:TextInputProps) =>{
        return(
        <View style={styles.viewMain}>

            <View style={styles.viewOne}>
            <Text style={styles.label}>{props.label}</Text>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <View style={styles.ViewTwoThree}>

            <View style={styles.viewTwo} >
                   <TextInput style={styles.input}
            placeholder={props.placeHolder}
            value={props.value}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            onSubmitEditing={props.onSubmitEditing} 
            />
            </View>


            <View style={styles.viewThree}>
               <CustomTouchableOpacity 
               disabled={props.disabled} 
               touchableText={props.touchableText}
               onPress={props.onPress}/>
            </View>

            </View>

            </KeyboardAvoidingView>
            </View>
        )

    }

    const styles = StyleSheet.create({
        viewMain:{
        height:'100%',
        flexDirection:'column',
        backgroundColor:Colours.creeamish.fromCH,
        },

        viewOne:{
            height:'30%',
            justifyContent: 'center',
            width: '100%',
          
            
        },

        label:{
            marginTop:'auto',
            marginBottom:5,
            fontSize: 24,
            fontWeight: '500',
            color: Colours.blacks.openLibrary,
        },

        ViewTwoThree:{
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
           backgroundColor:Colours.thatIlike.darkish,
           color: Colours.blacks.clubHPlaceholders,
           borderRadius:4,
           borderWidth: 0.4,
           borderBottomWidth:0.4,
           borderBottomColor: '#E0E0E0',
           paddingTop:20,
           paddingVertical:20,
           paddingHorizontal:25,
           width: '100%',          
        },

          inputAlone:{
                  fontSize: 13,
           fontWeight: '400',
           backgroundColor:Colours.thatIlike.darkish,
           color: Colours.blacks.clubHPlaceholders,
           borderRadius:5,
           borderWidth: 0.4,
           borderBottomWidth:0.4,
           borderBottomColor: '#E0E0E0',
           paddingTop:20,
           paddingHorizontal:25,
             textAlign:'center', // Android: anchors text/placeholder to top
           width: '100%',   
            
        },
         bigInput:{
           fontSize: 13,
           fontWeight: '400',
           backgroundColor:Colours.thatIlike.darkish,
           color: Colours.blacks.clubHPlaceholders,
           borderRadius:5,
           borderWidth: 0.4,
           borderBottomWidth:0.4,
           borderBottomColor: '#E0E0E0',
           paddingTop:20,
           paddingHorizontal:25,
             textAlignVertical: 'top', // Android: anchors text/placeholder to top
           width: '100%',   
            minHeight: 160, // fixed dp instead of '30%'
        },
        
        viewThree:{
            width: '100%',
               alignItems: 'center', 
    marginTop: 'auto', 
    marginBottom:30,
        },
  
        btnText:{
              fontSize: 14,
    fontWeight: '600',
    color: Colours.creeamish.fromCH, 
        }

    })
    export {CustomTextInput,BigTextInput,TextInputAlone,ReturnError,FeedBackAlerter, CustomTouchableOpacity};
