import { View, Text, StyleSheet } from 'react-native';
import { ReturnError } from '../looks/customComponents';
import { Colours } from '../looks/Colours';
import { useQuery } from '@tanstack/react-query';

type User = {
  id: string;
  email: string;
  latitude: number;
  phonenumber: string;
  usernamer: string;
};

export default function Profile() {
  const { data: user, isLoading, error } = useQuery<User>({
    queryKey: ['user'],
    queryFn: () => {
      throw new Error('No user in cache');
    },
    enabled: false,
  });

  if (isLoading) {
    return (
      <View style={styles.viewMain}>
        <Text>...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.viewMain}>
        <ReturnError />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.viewMain}>
        <Text>No user found</Text>
      </View>
    );
  }

  return (
    <View style={styles.viewMain}>
        //should be using props here, do that later
      <View style={styles.viewOne}>
        <Text style={styles.viewNmAndEm}>{user.username}</Text>
        <Text style={styles.viewNmAndEm}>{'\u2022'}{user.email}</Text>
        {/* <Text style={styles.text}>{'\u25E6'}{user.phonenumber}</Text> */}
        <Text style={styles.text}>{'\u25E6'}{user.longititude} , {user.latitude}</Text>
      </View>
      <View style={styles.viewTwo}>
        <Text style={styles.label}>your listings</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    viewMain:{
       height:'100%',
        flexDirection:'column',
        backgroundColor:Colours.creeamish.fromCH,//no '', for the imports kwa the style, defo will not,mmh, defo will not remember this
        alignItems:'center'
    },

        viewOne:{
           alignItems:'center',
            width: '90%',
            minHeight:'20%',
            borderRadius:5,
            backgroundColor:Colours.creeamish.openLibrary,
            
        },
        viewNmAndEm:{
            alignItems:'center'
        },
            text:{
             color:Colours.blacks.clubHPlaceholders,             
            // paddingLeft:30,        
            marginBottom:1,
            alignItems:'center'
        },
        label:{
            color:Colours.blues.blueGreenish,
            textDecorationLine:'underline',
            fontWeight:'500'
        },
    viewTwo: {
        marginTop:10,
        height:'auto',
           justifyContent: 'center',
            width: '100%',
            alignItems:'center',
    },
});