import { View, Text, StyleSheet, FlatList, Image,TouchableOpacity, Pressable, ScrollView, Modal } from 'react-native';
import { Colours } from '../looks/Colours';
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useState,useEffect } from "react";
import { CustomTouchableOpacity } from '../looks/customComponents';
import { useNavigation } from '@react-navigation/native';
import { center, TextAlign } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Animated, { useAnimatedStyle, useSharedValue,withTiming } from 'react-native-reanimated';
import Feather from '@expo/vector-icons/Feather';
import {
  Directions,
  Gesture,
  GestureDetector,

} from "react-native-gesture-handler";
import { runOnJS } from 'react-native-worklets';
type Item = {
  id: number | undefined,
  photo: string;
  title:string;
  description: string;
  price: string;
  type: string;
  category: string;
  date: string;
  userId: number;
};

const Header = () => {
  return (
    <View style={{
        marginTop:15,
    }}>
      <Text style={{
          fontSize: 13,
          textAlign:'center',
          color: Colours.blacks.bitMOreTwo,
          fontWeight: '700' 
      }}>localcylic</Text>
    </View>
  );
};
const Listings = () => {
  const [listings, setListings] = useState<Item[]>([]);
  const [flingedUp, setflingedUp] = useState(false);
  const {height} = useWindowDimensions();
   const height_beforeSwipeUp = height*0.08;
  const height_afterSwipeUp = height*0.3;
  const position = useSharedValue(height_beforeSwipeUp);
  const flingUp = Gesture.Fling()
  .direction(Directions.UP)
  .onStart(() => {
    position.value = withTiming(height_afterSwipeUp, { duration: 100 });
    runOnJS(setflingedUp)(true);
  });

  const flingDown =Gesture.Fling()
  .direction(Directions.DOWN)
  .onStart(() =>{
    position.value = withTiming(height_beforeSwipeUp,{duration:100});
     runOnJS(setflingedUp)(false);
  });
  const toChoose_eitherDirection= Gesture.Race(flingUp, flingDown);


  const styleSheet_from_useAnimated=useAnimatedStyle(()=>({
    height:position.value,
   }));


  




  useFocusEffect(
    React.useCallback(() => {
        console.log("useFocusEffect fired");
      const aFunction = async () => {
        try {
       const responseOfListings = await axios.get(`http://192.168.2.11:8080/items/getalllistings`);
          setListings(responseOfListings.data);
        } catch (error) {
          console.log(error);
        }
      };
      aFunction();
    }, [])
  );

  return (
    <View style={styles.to_support_the_modal}>
    <ScrollView style={styles.viewParent}>
      <Header />
      <View style={styles.chiniyaParent}>
        <Pressable>
     <FlatList
  data={listings}
  keyExtractor={(item) => String(item.id)}
  renderItem={({ item }) => (
    <View style={{
      marginBottom:10,
    }}>
      <View>

   <View style={styles.imageWrapper}>
      <Image 
      source={{ uri: item.photo }} 
      style={styles.imageStlye} resizeMode="cover"/>
        <View style={styles.inImageView}>
      </View>

      </View>

                        </View>



   
</View>
  )}/>   
  </Pressable>
  </View>
    </ScrollView>
    <GestureDetector gesture={toChoose_eitherDirection}>
      <Animated.View style={[styles.moddal,styleSheet_from_useAnimated]}>

       <View style={{alignItems:'center'}}>
      <Entypo name={flingedUp==false?"chevron-up":"chevron-down"} size={20} color="black"  />
      {flingedUp==false?<Text style={styles.swipeText}>swipe up</Text>:
      <Text style={styles.swipeText}>swipe down</Text>}
      </View>

          <View>
            {flingedUp==true?
        <View style={{
          // height:height_beforeSwipeUp,
          //  position: 'absolute',
          //  top:0,
  alignItems:'center'
        }}>
        <Feather name="plus-square" size={24} color="black" />
        </View>:
        null            
          }
      </View>
     
      </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  moddal:{
  marginTop:'auto',
  borderWidth:0.5,
  borderBottomWidth:0,
  borderRadius:16,
  borderBottomLeftRadius:0,
  borderBottomRightRadius:0,
  alignItems:'center',
  overflow:'hidden',
},
  to_support_the_modal:{
    height:'100%',
      width:'100%',
  backgroundColor:Colours.creeamish.fromCH,
  },
  viewParent:{
  height:'100%',
},

chiniyaParent:{
marginLeft:10,
marginRight:10,
},
  imageWrapper: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageStlye: {
    width: '100%',
    height: '100%',
  },
   inImageView: {
    position: 'absolute',
    left: 8,
    bottom: 8,
    backgroundColor: Colours.creeamish.openLibrary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  swipeText: { 
    color: Colours.greens.jamieGreenDeep, 
    fontSize: 6
   },
listingTitle:{
color:Colours.blacks.bitMOreTwo,
fontSize:16,
fontWeight:400,
},
listingTexts:{
color:Colours.blacks.clubHPlaceholders,
fontSize:16,
},
listingPrice:{
color:Colours.blacks.bitMOreTwo,
fontSize:11,
},
des:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginBottom:1,
},
btnText:{
              fontSize: 14,
    fontWeight: '600',
    color: Colours.creeamish.fromCH, 
        },
});

export default Listings;