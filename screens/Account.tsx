import { View, Text, StyleSheet, TextInputSubmitEditingEvent, Keyboard } from 'react-native';
import { CustomTextInput, ReturnError, TextInputAlone } from '../looks/customComponents';
import { useState } from 'react';
import { Colours } from '../looks/Colours';
import { useNavigation } from '@react-navigation/native';
import { RouteParameterTypes } from '../ScreenRouteParametersTYpes';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { verifyPhoneExistsFn } from '../serverState/user';
import { useQueryClient } from '@tanstack/react-query';
import { ResponseStatus } from '../serverState/user';

export default function Account() {
  const [text, setText] = useState('');
  const [disable, setEnable] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<RouteParameterTypes>>();
  const queryClient = useQueryClient();

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

  const onPressFnct = async () => {
    console.log({ text });
    const user = await verifyPhoneExistsFn(text);
    queryClient.setQueryData(['user'], user);
    console.log("hey"+ResponseStatus);
    Keyboard.dismiss();
    // no navigation.navigate call here — RootNavigator swaps to
    // BottomTabHolderIdentifier automatically once ['user'] is set,
    // and BottomTabs opens on the "Listings" tab by default
  }

  return (
    <View style={styles.one}>
      <View></View>
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