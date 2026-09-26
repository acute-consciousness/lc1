import { View, Text, StyleSheet,TextInput,Modal, TextInputSubmitEditingEvent, Keyboard } from 'react-native';
import  {CustomTextInput, ReturnError}  from '../looks/customComponents';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colours } from '../looks/Colours';
import { useNavigation } from '@react-navigation/native';
import { RouteParameterTypes } from '../ScreenRouteParametersTYpes';//TODO have the route type as message from my navigation, mmh, form the navigation types
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
//ii sijui \/

export default function OTP({route}:any) {// it was just this?({ route }: any),can i recall the mindpic of how what, mmh, of what we added on param
    const {message} = route.params;
    const [codeInputted, setCodeInputted]=useState('');
    return (
    

<View style={styles.one}>
  
            <View style={styles.label}>
                <View style={styles.info}>
                   


              
                <Text style={styles.infoTexts}>
                     <Ionicons name="alert" size={24} color={Colours.reds.one} /> 
                    {message}</Text>
                                <Text style={styles.infoTexts}>associated with that number</Text>
                                <Text></Text>
            <Text style={styles.infoTexts}>so wait for an otp to be sent</Text>
                </View>
            </View>
            <View style={styles.TextInputPart}>
                 <TextInput style={styles.inputAlone}
                            placeholder='enter code'
                            keyboardType='numeric'
                              placeholderTextColor={Colours.blacks.clubHPlaceholders}
                              value={codeInputted}
                              onChangeText={(char)=>setCodeInputted(char)}
                            />
            </View>
       
        </View>
    );
}

const styles = StyleSheet.create({
    one: {
        // justifyContent: 'center',
        // alignItems:'center',
        backgroundColor: Colours.creeamish.fromCH,
        height:'100%',
        width:'100%',
    },
  
    label: {
    height:'30%',
},
info:{
    justifyContent:'center',
    alignItems:'center',     
          textAlign:'center',
           marginTop:'auto', //marginTop auto on the item itself
    },
    infoTexts:{
        width:'80%',
        alignItems:'center',
    },
    TextInputPart:{
        marginTop:20,
        height:'70%',
        alignItems:'center'
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
           paddingBottom:20,
           paddingHorizontal:25,
             textAlign:'center', // Android: anchors text/placeholder to top
           width: '70%',   
            
        },
});