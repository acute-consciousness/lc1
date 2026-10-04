import { View, Text, StyleSheet, TextInputSubmitEditingEvent, Keyboard } from 'react-native';
import { CustomTextInput } from '../looks/customComponents';
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
  const [loading, setLoading] = useState(false);
  const [errorMessages, seterrorMessages] = useState('');
  const queryClient = useQueryClient();


  const generateOTP = () => `${Math.floor(Math.random() * 10000)}`.padStart(4, '0');


  const createonfourOfour = async (phoneN: string, codde: string) => {
    const response = await fetch('https://api.textbee.dev/api/v1/gateway/send-sms', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.EXPO_PUBLIC_TEXTBEE_API_KEY as string,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceId: '6abfc236cf8e7692e012a6e7',
        recipients: [phoneN],
        message: 'verification code is: ' + codde,
      }),
    });
    if (!response.ok) {
      throw new Error('TextBee failed with status ' + response.status);
    }
    return response;
  };

  const onPressFnct = async () => {
    setLoading(true);
    seterrorMessages('');
    try {
      const user = await verifyPhoneExistsFn(text);

      if (user?.status == 200) {
        queryClient.setQueryData(['user'], user.data);
      } else if (user?.status == 404) {
        const code = generateOTP();
        try {
          await createonfourOfour('254' + text, code);
          navigation.navigate('OneTimePassword', {
            message: 'did not find an account',
            phoneNumber: text, 
            karua: code, 
          });
        } catch (e) {
          console.log('textbee failed', e);
          seterrorMessages('could not send code');
        }
      } else if (user?.status == 500) {
        console.log('server connection error!');
        seterrorMessages('server connection error!');
      }
      Keyboard.dismiss();
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false); 
    }
  };

  const onSubmit = (e: TextInputSubmitEditingEvent) => {
    if (disable == false) {
      console.log(e.nativeEvent.text);
    }
  };

  const aMethod = (charInpt: string) => {
    setText(charInpt);
    setEnable(charInpt.length != 9);
  };

  return (
    <View style={styles.one}>
      <View
        style={{
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
        }}
      >
        <Ionicons name="alert" size={24} color={Colours.reds.one} />
        <Text>{errorMessages}</Text>
      </View>

      <View style={styles.two}>
        <CustomTextInput
          label={<Text>enter mobile number</Text>}
          placeHolder="+254 *********"
          value={text}
          onChangeText={aMethod}
          onSubmitEditing={onSubmit}
          touchableText="continue"
          keyboardType="phone-pad"
          disabled={disable}
          load={loading}
          onPress={onPressFnct}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  one: {
    justifyContent: 'center',
    backgroundColor: Colours.creeamish.fromCH,
  },
  two: {
    margin: 10,
  },
});