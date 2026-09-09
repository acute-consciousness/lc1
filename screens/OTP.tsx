import { View, Text, StyleSheet,Modal, TextInputSubmitEditingEvent, Keyboard } from 'react-native';
import  {CustomTextInput, ReturnError}  from '../looks/customComponents';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colours } from '../looks/Colours';
import { useNavigation } from '@react-navigation/native';
export default function OTP({ route }: any) {// it was just this?({ route }: any),can i recall the mindpic of how what, mmh, of what we added on param
    //nilikuwa story, mmh, za but hadi haina the type
    return (
    

<View style={styles.one}>
  
            <View style={styles.two}>
                                <Ionicons name="alert" size={24} color={Colours.reds.one} />
                <Text>{(route.params.feedbackAlert)}</Text>
            </View>
       
        </View>
    );
}

const styles = StyleSheet.create({
    one: {
        justifyContent: 'center',
        backgroundColor: Colours.creeamish.one,
        height:'100%',
    },
    two: {
        margin: 10,
        display:'flex',
        flexDirection:'row',
                  elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    },
});