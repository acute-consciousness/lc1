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
      <View style={styles.viewOne}>
        <Text style={styles.text}>{user.username}</Text>
        <Text style={styles.text}>{user.email}</Text>
        <Text style={styles.text}>{user.phonenumber}</Text>
        <Text style={styles.text}>{user.longititude},{user.latitude}</Text>
      </View>
      <View style={styles.viewTwo}>
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
           margin:10,
            width: '90%',
            minHeight:'20%',
            borderRadius:5,
            backgroundColor:Colours.greens.jamieGreenLigher,
            
        },
            text:{
             color:Colours.blacks.clubHPlaceholders,             
             textAlign: 'center',
            paddingLeft:10,
             paddingRight:10,
             
            marginBottom:1,
        },
    viewTwo: {
        marginTop:10,
        height:'auto',
           justifyContent: 'center',
            width: '100%',
            alignItems:'center',
    },
});