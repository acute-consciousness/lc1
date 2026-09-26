//it, mmh, it, mmh, it is a whole component, ya, juu stori za, mmh, 
//juu stori za kufire functions, mmh, juu ya stori ya kufire functions and stuff
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import { use,useState } from "react";
import { FlatList, Text,View } from "react-native";
type items ={
    id:number|undefined,
    photo:string,
    description:string,
    price:string,
    type:string|null,
    condition:string|null,
}
export const Test =async()=>{
   const testListings = await axios.get(
          `http://192.168.2.13:8080/items/getalllistings`
          // 192.168.2.13
        );
        console.log(testListings.data); 
}



  {/*
  export const ListingsFlatList = (props:items) => {
  // [] is the initial value — "start with an empty list until the fetch resolves"
  const [listings, setListings] = useState([]);

  useFocusEffect(
    // useCallback memoizes the function so its reference stays stable across renders.
    // Without it, a new function is created every render → effect re-runs every render.
    // It's NOT "for holding async" — async/await works fine inside any function.
    React.useCallback(() => {
      const aFunction = async () => {
        const responseOfListings = await axios.get(
          `http://192.168.2.13:8080/items/getalllistings`
        );
        console.log(responseOfListings);
        setListings(responseOfListings.data);
      };
      aFunction(); // ← you defined it but never called it
    }, []) // ← deps: [] means "don't re-run unless focus changes"
  );

  // JSX belongs HERE, in the component's return — NOT inside the effect
  return (<View>

    <Text>something</Text>

    <FlatList
      data={listings}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => 
        //so hapa tuanze stori za the image component for our photo's url image
    
    }
    />
  </View>
  );
};   
  */} 
  



