import { StatusBar } from 'expo-status-bar';
import SafeViewAndroid from './looks/SafeAreaView';
import { StyleSheet,View, Text} from 'react-native';
import { NimbusRegular } from './looks/customFonts';
import Account from './screens/Account';

export default function App() {
  {NimbusRegular}
  return (
    <View style={[SafeViewAndroid.AndroidSafeArea]}>
      <StatusBar style="auto" />
      <Account/>
    </View>
  );
}

const styles = StyleSheet.create({
});
