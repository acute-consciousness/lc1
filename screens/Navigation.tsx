import Account from './Account';
import Profile from './Profile';
import OTP from './OTP';
import Listings from './Listings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Messages from './Messages';
import CreateListing from './CreateListing';
import {  PlatformPressable } from '@react-navigation/elements';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colours } from '../looks/Colours';

// const navigation=useNavigation();//no need for this, the i don't know, that the screen options provides this
// Bottom tab navigator — holds Listings, CreateListing, Trust, Profile
const bottomNavTab = createBottomTabNavigator({
    screenOptions: ({route}) => ({
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
            fontSize: 15,
            color: Colours.blacks.openLibrary,
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
        tabBarActiveTintColor: Colours.blues.openLibrary,
        tabBarInactiveTintColor: Colours.blues.disableBlue,
    }),
    initialRouteName: 'Listings',
    screens: {
        Listings: {
            screen: Listings,
             options: {
                headerShown: true,
                title: 'localcyclic',
            }
        },
        CreateListing: {
            screen: CreateListing,
                options: {
                headerShown: true,
                title: 'post an item',
            }
        },
        Messages: {
            screen: Messages,
                options: {
                headerShown: true,
                title: 'messages',
            }
        },
        Profile: {
            screen: Profile,
                options: {
                headerShown: true,
                title: 'Your profile',
                headerBackVisible: false, // removes the back button
            }
        },
    },
});

// Root stack navigator — only ONE entry point into bottomNavTab now
const configNavigation = createNativeStackNavigator({

    screens: {
        BottomTabHolderIdentifier: {
            screen: bottomNavTab,
            options:{
                headerShown:false,
            }
            /*Listing
             * CreateListing
             * Trust
             * Profile
             */
        },

        Account: {
            screen: Account,
            options: {
                headerShown: false,
            }
        },

        // Single stack entry hosting the whole tab navigator.
        // Navigate into specific tabs via:
        // navigation.navigate('Listings', { screen: 'Profile', params: {...} })

        

        OTP: {
            screen: OTP,
            options: {
                headerShown: false,
            },
        },
    },
});

const WrapConfigNavigatorToRoot = createStaticNavigation(configNavigation);

export default function RootNavigator() {
    return (
        <WrapConfigNavigatorToRoot />
    );
}