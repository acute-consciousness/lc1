import Account from './Account';
import Profile from './Profile';
import OTP from './OTP';
import Listings from './Listings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Messages from './Messages';
import CreateListing from './CreateListing';
import { PlatformPressable } from '@react-navigation/elements';
import { FontAwesome6 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colours } from '../looks/Colours';
import { checkCachePresence } from '../serverState/checkCachePresence';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colours.creeamish.fromCH,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarButton: (props) => (
          <PlatformPressable
            {...props}
            pressOpacity={1}
            android_ripple={{ color: 'transparent' }}
          />
        ),
        headerStyle: {
          backgroundColor: Colours.creeamish.fromCH,
          borderTopWidth: 0,
          elevation: 0,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 13,
          color: Colours.blues.blueGreenish
        },
        tabBarIcon: ({ color }) => {
          if (route.name === "Listings") {
            return <FontAwesome6 name='house-crack' size={24} color={color} />;
          } else if (route.name === 'CreateListing') {
            return <MaterialIcons name="create-new-folder" size={30} color={color} />;
          } else if (route.name === 'Messages') {
            return <AntDesign name="message" size={24} color={color} />;
          } else if (route.name === 'Profile') {
            return <AntDesign name="user" size={27} color={color} />;
          }
        },
        tabBarActiveTintColor: Colours.greens.jamieGreenDeep,
        tabBarInactiveTintColor: Colours.greys.one,
      })}
      initialRouteName="Listings"
    >
      <Tab.Screen name="Listings" component={Listings} options={{ headerShown: true, title: 'localcyclic' }} />
      <Tab.Screen name="CreateListing" component={CreateListing} options={{ headerShown: true, title: 'post an item' }} />
      <Tab.Screen name="Messages" component={Messages} options={{ headerShown: true, title: 'messages' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: true, title: 'profile' }} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  const { data: user } = checkCachePresence(['user']);
  const hasUser = !!user;

  return (
    <Stack.Navigator>
      {hasUser ? (
        <Stack.Screen
          name="BottomTabHolderIdentifier"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
          <Stack.Screen name="OneTimePassword" component={OTP} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
}