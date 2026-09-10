import {View,Text,TextInput,StyleSheet,KeyboardAvoidingView, Platform, TouchableOpacity,TextInputSubmitEditingEvent, Modal, KeyboardTypeOptions} from 'react-native';
import { Colours } from './Colours';
import Ionicons from '@expo/vector-icons/Ionicons';
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
        keyboardType?:KeyboardTypeOptions;
        disabled?:boolean;//nikienka onChange, mmh, nikieka onChange hapa, it, it, it says it, it says it refers, it refers to a value
        // walai, walai, walai, walai javascript
        onPress?:(e:any)=>void;//so, so after the, after, mmh, after, after
        //after defining its interface now what?
    }
    interface Alerters{
        feedBackText?:ReactNode,
    }

   const ReturnError = (props:Alerters)=> {
        return(
            <Modal transparent animationType="fade">
                <View style={{
                width:'100%',//whatever recommended auto and yea, i kind of have an interpretation of how it can look
                //we want something to do with the height, the this be done by the padding of the text and so on
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
                width:'100%',//whatever recommended auto and yea, i kind of have an interpretation of how it can look
                //we want something to do with the height, the this be done by the padding of the text and so on
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
    //So i guess or should i interprate that this nit solves but work around that now values have been assigned o props
    // as they are originally not, not, not, not, mmh, not suposed to
    // and so
     //here, here, here, that the value current in action will the one that willl be used, otherwise, it will justbe false
    //i should get that upper comment into my head, what is the default state? True i have set it
    //then what, oh! the opacity thing
    //maybe for now get that state and props are detected auto, or when we connect the child to parent,  by importing, mh, by importing the whole component
    // so up there, that it is like so
    let isDisabled;// ok i have declared a, declared a something
    if(props.disabled){//just like we saw,...i can't explain but for now, how, i get the cuuren value, so when set it gets that but continuing..
        isDisabled=props.disabled;//this is true
    }//have, have, mmh, changed, mmh, changed to the !not operator to see, to try and have the disabled colour from, from
    //from the start, from, from, from the start of the render
    //no we are, no, no we are revering it back
    else{
                isDisabled=false;

    }
    //let us check this in test
        return (
            // nothing related to what is below, disable property. bpp - that it can be done even on, on, on, on a touchable
            // onPress and opacity. i think onPress is for clickable, ok, we, ok, we will play with them
            // sasa, sasa, sasa, sasa ukule tucall, sasa,sasa ukuje tucall iyou function huku
            // how do we go about that
            // bila hadi kuangalia further, mmh, i think i know where i'm going wrong. it from, it's, mmh, it's from the understanding
            /* what did i, what did i want to say, jsut check if disable works, works and, and, and, and, and check out what it does
            but nilikuwa nataka kusema, the value true or false can just be passed in the accounts file
            changing the style, changing, mmh, changing, mmmh, changing the styles is what, is what, is what brought me here*/
   <TouchableOpacity onPress={props.onPress} style={{
    backgroundColor:(!isDisabled==false)?Colours.greens.ileyaJamieGreen:Colours.greens.jamieGreenDeep,//well should it be like this, damn, damn, damn the mistake, the, the mistake, the, the, the mistake was actually here
    //actually no i messed it up, meaning i didn't, i didn't catch this wel
    // backgroundColor: Colours.greys.one,
     //backgroundColor:Colours.blues.openLibrary,
           paddingVertical: 15,
    paddingHorizontal: 50,  
    borderRadius:4,
    //if bllaah?yes: otherwise no... and i can't wrap around how, and i can't around how i will set it, 
    //what about the many/extended 'ternary' operators?
    //itakuwa (disablePropValue==false)? 0  : 1;
   }}
    disabled={props.disabled}>//what about props.onchange. But we haven't defined this
                    <Text style={styles.btnText}>{props.touchableText}</Text>
                </TouchableOpacity>

        )
    }

   const CustomTextInput = (props:TextInputProps) =>{// that the issue, mmh, that the issue with the onPress is that this, is, is, is, is, mmh, is that this component, 
    //is that this component dropped it
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
    /*the conventional way to pass props, to, to, to, to pass props in a function, i don't know
    izi arrow function ziko hadi 'assigned to const, mmh, zinaitwa aje
    so the way would be like 
    const styles = (alafu we pass the props hapa) =>{}
    but ii yenye naangalia itakuwa aje?
    so kuna function hapa
    the dot create is, is a method from somewhere, lazily i say that tukipitisha arguement hapa
    italeta some error that it wasn't declared in such a structure, in, in, in, in
    such a structure as, as to accept, as, as, as to accept arguements. Waah, mi hadi nahisi kulala
    so what, so what are we going to do????
    make it into a function?, well, iyo, well iyo imerusha maerros on the styles, ok, sawa
    */

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
       /* btn:{
            backgroundColor:Colours.blues.openLibrary,
           paddingVertical: 15,
    paddingHorizontal: 50,  
    borderRadius:4,
        },*/
        btnText:{
              fontSize: 14,
    fontWeight: '600',
    color: Colours.creeamish.fromCH, // Standard iOS Blue
        }

    })
    export {CustomTextInput, ReturnError,FeedBackAlerter};
