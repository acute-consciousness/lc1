import { View, Text, StyleSheet } from 'react-native';
import { ReturnError } from '../looks/customComponents';
import { Colours } from '../looks/Colours';
import { useQuery } from '@tanstack/react-query';
import { TextInputAlone } from '../looks/customComponents';
import { useState } from 'react';
import Update_from_profile from '../serverState/updateUser';

type User = {
  id: string;
  email: string;
  latitude: number;
  phonenumber: string;
  usernamer: string;
};

export default function Profile() {
  const [email, setEmail]=useState<string>('');
    const [username, setUsername]=useState<string>('');

      const fnc_updateEmal= async()=>{
      const  charr:string = email;
        
      }

      const fnc_updateUserName=async()=>{
        const charrTwo:string = username;
      }

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


      <View style={styles.viewLabel}>
              <Text style={styles.label}>mobile number</Text>
              </View>
       <View style={styles.already}>
        <Text style={styles.viewNmAndEm}>+254 {user.phonenumber}</Text>
        </View>



    <View style={styles.viewLabel}>
              <Text style={styles.label}>email</Text>
              </View>
          {user.email!=null?<View style={styles.already}>
        <Text style={styles.viewNmAndEm}>{user.email}</Text>
        </View>:<TextInputAlone
        value={email}
        placeHolder={'enter email'}
        onChangeText={fnc_updateEmal}        
        />}



<View style={styles.viewLabel}>
              <Text style={styles.label}>enter username</Text>
              </View>
           {user.usernamer!=null?<View style={styles.already}>
        <Text style={styles.viewNmAndEm}>{user.usernamer}</Text>
        </View>:<TextInputAlone
        value={username}
        placeHolder={'who or what do they call you'}
        onChangeText={fnc_updateUserName}
        />}
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
        backgroundColor:Colours.creeamish.fromCH,
        alignItems:'center'
    },

        viewOne:{
            width: '90%',
            minHeight:'20%',            
        },
        already:{
backgroundColor: Colours.creeamish.fromCH,
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: Colours.greys.one,
    padding: 7,
     textAlign: 'center',
        },
        viewNmAndEm:{
            fontSize: 16,
             textAlign:'center',
    fontWeight: '400',
    color: Colours.blacks.clubHPlaceholders,
        },
            text:{
             color:Colours.blacks.clubHPlaceholders,                    
            marginBottom:1,
            alignItems:'center'
        },
        label:{
            color:Colours.blacks.bitMOreTwo,
            textDecorationLine:'underline',
            fontSize:16,
            fontWeight:'500'
        },
    viewTwo: {
        marginTop:10,
        height:'auto',
           justifyContent: 'center',
            width: '100%',
            alignItems:'center',
    },
    viewLabel:{
  alignItems:'center',
  marginBottom:5,
},
});