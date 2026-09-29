import { View, Text, StyleSheet, FlatList, Image,TouchableOpacity } from 'react-native';
import { Colours } from '../looks/Colours';
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
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
          const responseOfListings = await axios.get(`http://192.168.2.10:8080/items/getalllistings`);
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
     <FlatList
  data={listings}
  keyExtractor={(item) => String(item.id)}
  renderItem={({ item }) => (
    <View style={{
      borderWidth:1,
      // padding:5,
      borderBottomWidth:1,
      marginBottom:20,
      borderRadius:8,
      borderColor:Colours.greys.one,
      backgroundColor:Colours.thatIlike.darkish
      
      }}>
     

      <View style={{
      padding:10,
      
      }}>
      <View style={{ width: '100%', height: 400 }}>
      <Image 
      source={{ uri: item.photo }} 
      style={{ flex: 1, width: '100%', height: undefined }}
      resizeMode="cover"/>
      </View>


      <View style={styles.des}>
        <Text style={styles.listingTitle}>{item.title}</Text>
      </View>

      <View style={styles.des}>
          <Text style={styles.listingTexts}>date posted:{item.date}</Text>
        <Text style={styles.listingTexts}>condition:{item.category}</Text>
      </View>

      <View style={styles.des}>
      
        <Text style={styles.otherListingTexts}>ksh {item.price}</Text>

        </View>

<View style={{
 
    alignItems:'center',
}}>
        <TouchableOpacity  style={{
           backgroundColor:Colours.greys.one,
                  paddingVertical: 8,
           paddingHorizontal: 5,  
           borderRadius:4,
           alignItems:'center',
           width:'50%',
           marginBottom:10,
       
          }}>
             <Text style={styles.btnText}>check it out</Text>
       
       
                        </TouchableOpacity>
                        </View>
                        </View>



   
</View>
  )}/>   
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
listingTitle:{
color:Colours.blacks.another,
fontSize:13,
},
listingTexts:{
color:Colours.greys.one,
fontSize:11,
},
otherListingTexts:{
color:Colours.greens.jamieGreenLigher,
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