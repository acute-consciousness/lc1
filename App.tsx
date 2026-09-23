import { StatusBar } from 'expo-status-bar';
import SafeViewAndroid from './looks/SafeAreaView';
import { StyleSheet,View, Text} from 'react-native';
import { NimbusRegular } from './looks/customFonts';
import { NavigationContainer } from '@react-navigation/native';//this is me on another day, this, this, mmh, this is me on another day but my initial interpretation, slight head wrap aroung the second/ peer dependency on navigation, the staticNavi... wrapping the native so as....to be rendered in the root..was right.So i dont need the navigation container. It is already, it, mmh, it is already a navigation container
//and 'redudancy' - this is definately not the spelling, but it means unnecessary
import WrapConfigNavigatorToRoot from './screens/Navigation';//no {} juu ya the wor default?
import Account from './screens/Account';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const  queryClient = new QueryClient();
//some...should be wrapped in a, in a what, in a NavigationContainer from the main/first layer navigation* dependency
export default function App() {
  {NimbusRegular}
  return (
    <View style={[SafeViewAndroid.AndroidSafeArea]}>
    <QueryClientProvider client={queryClient}>
    <StatusBar style="auto" />
     <WrapConfigNavigatorToRoot/>// hapa i encountered some bugs before i settled, mmh, on this. I did the normal... and i was suggested a parathesis wrapper around.. and 
     //the return of the component  in itself the return did have a the parenthesis, you know what mean. Fixed it with,,fixed it 
     //fixed it with export default function identifier parenthesis and the java way parathesis and the return 
     //has parathesis and you return the component
    </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
});
