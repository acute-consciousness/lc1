import { View, Text,Modal, StyleSheet, TextInputSubmitEditingEvent, Keyboard } from 'react-native';
import { CustomTextInput, ReturnError, TextInputAlone } from '../looks/customComponents';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colours } from '../looks/Colours';
import { useNavigation } from '@react-navigation/native';
import { RouteParameterTypes } from '../ScreenRouteParametersTYpes';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { verifyPhoneExistsFn } from '../serverState/user';
import { useQueryClient } from '@tanstack/react-query';


export default function Account() {
  const [text, setText] = useState('');
  const [disable, setEnable] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<RouteParameterTypes>>();
  const [loading,setLoading]=useState(false);
  const [errorMessages, seterrorMessages]=useState('');
  const [otpCode, setOtpCode] = useState("")
  const queryClient = useQueryClient();

  

  const generateOTP = ()=>{
      const answer=`${Math.floor(Math.random() * 10000)}`.padStart(4, "0");
      setOtpCode(answer);
      return answer;
  }
  const createonfourOfour = async(phoneN:string)=>{
    let response:any;
    try{
      setLoading(true);
     const codde= generateOTP();
      response = await fetch(
        'https://api.textbee.dev/api/v1/gateway/send-sms',{
          method:'POST',
          headers:{
      'x-api-key': process.env.EXPO_PUBLIC_TEXTBEE_API_KEY,
      'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            deviceId:'6abfc236cf8e7692e012a6e7',
            recipients:[phoneN],
            message:'verificaton code is:'+codde,
          })
        }

      )
    }
    catch(e){
      console.log(e);
    }
    finally{
      setLoading(false);
      console.log('Otp request process finished') 
    }
    return response;
  }

   const onPressFnct = async () => {
    setLoading(true);
    try{
    const user = await verifyPhoneExistsFn(text);
    if (user?.status == 200) {
  queryClient.setQueryData(['user'], user.data);
}
    else if(user?.status==404){
      try{
      const result = await createonfourOfour('254'+text);
      console.log(result.data);
      if(result.status==200){
        navigation.navigate('OneTimePassword',{
          message:'did not find an account',
          phoneNumber:{text},
          karua:{otpCode}
        })
      }
      setEnable(true);

      }
      catch(e:any){
        console.log('textbee failed'+e);
      }
    }
     else if(user?.status==500){
      console.log('server connection error!')
      seterrorMessages('server connection error!')
    }
    Keyboard.dismiss();
    // no navigation.navigate call here — RootNavigator swaps to
    // BottomTabHolderIdentifier automatically once ['user'] is set,
    // and BottomTabs opens on the "Listings" tab by default
  }
  catch(e:any){
    console.log(e);
  }
  finally{
    setLoading(false);
  }

  }




  const onSubmit = (e: TextInputSubmitEditingEvent) => {
    if (disable == false) {
      const nowSnapshot = e.nativeEvent.text;
      console.log(nowSnapshot);
    }
  }

  const aMethod = (charInpt: string) => {
    setText(charInpt);
    if (charInpt.length == 9) {
      setEnable(false);
    }
    else if (charInpt == '') {
      setEnable(true);
    }
    else if (charInpt == null) {
      setEnable(true);
    }
    else setEnable(true);
  }

 

  return (
    <View style={styles.one}>
                <View style={{
                 elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
            }}>
                <Ionicons name="alert" size={24} color={Colours.reds.one} />
                <Text>{errorMessages}</Text>
                </View>
                
      <View style={styles.two}>
        <CustomTextInput
          label={<Text>enter mobile number</Text>}
          placeHolder='+254 *********'
          value={text}
          onChangeText={aMethod}
          onSubmitEditing={onSubmit}
          touchableText='continue'
          keyboardType="phone-pad"
          disabled={disable}
          load={loading}
          onPress={onPressFnct}
        />
        <View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  one: {
    justifyContent: 'center',
    backgroundColor: Colours.creeamish.fromCH,
  },
  two: {
    margin: 10,
  }
})