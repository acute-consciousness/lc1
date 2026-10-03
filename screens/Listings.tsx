import { View, Text, StyleSheet, FlatList, Image,TouchableOpacity, Pressable } from 'react-native';
import { Colours } from '../looks/Colours';
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useState,useEffect } from "react";
import { CustomTouchableOpacity } from '../looks/customComponents';
import { useNavigation } from '@react-navigation/native';

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



// const navigation = useNavigation();

const Listings = () => {
  const [listings, setListings] = useState<Item[]>([]);


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
    <View style={styles.viewParent}>
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
        <Text style={styles.textinImage}>ksh:{item.price}</Text>
      </View>

      </View>

                        </View>



   
</View>
  )}/>   
  </Pressable>
  </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewParent:{
  height:'100%',
  width:'100%',
  backgroundColor:Colours.creeamish.fromCH,

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
  textinImage: { 
    color: Colours.greens.jamieGreenDeep, 
    fontSize: 12
   },
listingTitle:{
color:Colours.blacks.bitMOreTwo,
fontSize:13,
fontWeight:400,
},
listingTexts:{
color:Colours.blacks.clubHPlaceholders,
fontSize:13,
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