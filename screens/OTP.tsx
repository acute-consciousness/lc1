import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colours } from '../looks/Colours';
import { create_Account_for_user } from '../serverState/user';
import { useQueryClient } from '@tanstack/react-query';

export default function OTP({ route }: any) {
  // message, phoneNumber and karua (the code) are all plain strings now
  const { message, phoneNumber, karua } = route.params;

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const query = useQueryClient();

  const toPost = async (key: string, phone: string) => {
  try {
    const user = await create_Account_for_user(key, phone);
    query.setQueryData(['user'], user); 
  } catch (e) {
    console.log(e);
    setError('could not create account');
  }
};

  const onChangeCode = (chars: string) => {
    setValue(chars);
    if (error) setError(''); 
  };

  const onSubmitCode = async () => {
    console.log('typed:', value, 'expected:', karua); 

    if (value.length !== 4) {
      setError('enter the 4 digit code');
      return;
    }
    if (value !== karua) {
      setError('wrong code');
      return;
    }

    setError('');
    setLoading(true);
    try {
      await toPost(phoneNumber, phoneNumber);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.one}>
      <View style={styles.label}>
        <View style={styles.info}>
          <Text style={styles.infoTexts}>
            <Ionicons name="alert" size={24} color={Colours.reds.one} />
            {message}
          </Text>
          <Text style={styles.infoTexts}>associated with that number</Text>
          <Text></Text>
          <Text style={styles.infoTexts}>wait for an otp to be sent</Text>
        </View>
      </View>

      <View style={styles.TextInputPart}>
        <TextInput
          style={styles.inputAlone}
          placeholder="enter code"
          keyboardType="numeric"
          maxLength={4}
          placeholderTextColor={Colours.blacks.clubHPlaceholders}
          value={value}
          onChangeText={onChangeCode}
          onSubmitEditing={onSubmitCode}
        />
        {error !== '' && <Text style={{fontSize:16, color: Colours.blacks.clubHPlaceholders, marginTop: 2 }}>{error}</Text>}
      </View>

      <View>
        {loading && <ActivityIndicator size={24} color={Colours.blacks.another} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  one: {
    backgroundColor: Colours.creeamish.fromCH,
    height: '100%',
    width: '100%',
  },
  label: {
    height: '30%',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 'auto',
  },
  infoTexts: {
    width: '80%',
    alignItems: 'center',
  },
  TextInputPart: {
    marginTop: 20,
    height: '70%',
    alignItems: 'center',
  },
  inputAlone: {
    fontSize: 13,
    fontWeight: '400',
    backgroundColor: Colours.thatIlike.darkish,
    color: Colours.blacks.clubHPlaceholders,
    borderRadius: 5,
    borderWidth: 0.4,
    borderBottomWidth: 0.4,
    borderBottomColor: '#E0E0E0',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 25,
    textAlign: 'center',
    width: '70%',
  },
});