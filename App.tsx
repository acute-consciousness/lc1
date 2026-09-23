import { StatusBar } from 'expo-status-bar';
import SafeViewAndroid from './looks/SafeAreaView';
import { StyleSheet, View, Text } from 'react-native';
import { NimbusRegular } from './looks/customFonts';
import { NavigationContainer } from '@react-navigation/native';
import WrapConfigNavigatorToRoot from './screens/Navigation';
import Account from './screens/Account';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  {NimbusRegular}
  return (
    <View style={[SafeViewAndroid.AndroidSafeArea]}>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <WrapConfigNavigatorToRoot />
        </NavigationContainer>
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({});