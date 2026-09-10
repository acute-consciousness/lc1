import { View, Text, StyleSheet, TextInputSubmitEditingEvent, Keyboard } from 'react-native';
import  {CustomTextInput, ReturnError}  from '../looks/customComponents';
import { useState } from 'react';
import { Colours } from '../looks/Colours';
import { useNavigation } from '@react-navigation/native';
type profileProps={//so props, mmh, i keep forgetting, ..with props
    name:string,
    aUserProperty:string,
}
const ComponentDisplay = (props:profileProps) =>{
return(<View>
    <Text>{props.name}: {props.aUserProperty}</Text>
    </View>
)
}
export default function Profile({ route }: any) {//yea, ni :, so, the {}, ensures, ensures what, ensures many parameters. In there
    const accountObject = (route.params.user);
    //nimekaa hapa sana, sijui if, mmh, if i can implement, mmh, props, ....i have defined, mmh, i have
    //i have, mmh, i have defined the props. So, so, so, so what?
    // i should be able to reuse a component, one component, alright, so i should, mmh, i should be created

    return (
        <View style={styles.viewMain}>
        <View style={styles.viewOne}>
                <Text style={styles.label}>Your profile</Text>
            </View>


    <View style={styles.viewTwo}>
        <ComponentDisplay name='name' aUserProperty={accountObject.username}/>
        <ComponentDisplay name='email' aUserProperty={accountObject.email}/>//many of this but, but, mmh, but
        <ComponentDisplay name='lattitude' aUserProperty={accountObject.latitude}/>
        <ComponentDisplay  name = 'longitude'aUserProperty={accountObject.longititude}/>
                </View>
            </View>



    );
}

const styles = StyleSheet.create({
    viewMain:{
       height:'100%',
        flexDirection:'column',
        backgroundColor:Colours.creeamish.fromCH,//no '', for the imports kwa the style, defo will not,mmh, defo will not remember this
    },

        viewOne:{
            alignItems: 'center',
            width: '100%',
            height:'30%',
            // alignItems:'center', 
            
        },
            label:{
            marginTop:'auto',
            // fontFamily:'',
            color: Colours.greens.ileyaJamieGreen,
            fontWeight:500,
            // textAlign: 'center',
        },
    viewTwo: {
        marginTop:10,
        height:'auto',
           justifyContent: 'center',
            width: '100%',
            alignItems:'center',
    },
});