/**that, that, that, mmh, that 
 * 
 * 
 */
import Account from './Account';
import Profile from './Profile';
import OTP from './OTP';
import Listings from './Listings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Messages from './Messages';
import CreateListing from './CreateListing';
import Trust from './Trust';
import { PlatformPressable } from '@react-navigation/elements';
import { FontAwesome6 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colours } from '../looks/Colours';

//then, then, then, then what?. let us try and interprate
const bottomNavTab = createBottomTabNavigator({//now the  route
    /**alright, mmh, i know the there was a screen, mmh, defination, but also there was someting else hapa juuu,ah. 
     * let us check it out, so it isjust the same
     * well just for remembr, mmh, rememberance
     * kulikuwa na scrren and there was an issue with my understandings, mmh, in terms, mmh, in terms of what is the identifier
     * i put, mmh i put them all with, mmh, with the same intentifier
     * ok, mmh, ok, mmh, ok, mmh, ok that, mmh, ok that is done, sasa, mmh, sasa stori, mmh, za route na tab icons, and stuff
     */
    //oh, screen, mmh, oh, mmh, oh, mmh, oh, screen, mmh, screen options zime, zime,zimerudi, yaani i am, yaani, i am using them, i am using them here
    screenOptions:({route})=>({//ii nayo i, i, i won't even, mmh, i would, mmh, i woun't even, i, i, i, i won't bother,mmh, even try to understand, mmh, understand at, at, at, at, at the moment
    headerShown: false,//is here for the sake of it, doesn't, mmh, doesn't, mmh, doesn't hide when, mmh, when , mmh, when alone
    tabBarShowLabel: false,   // that, that it changed name by ..version , now, mmh, it is tabBarShowLable, what an identifier name. Well yes, that, mmh, that works,hides the text under the icon, bpp did this, i should have know this, but, i did try na title:.. but uko chini kwa stack while really it is kwa the bottom navigator, mmh, the bottom navigator, mmh, that, that, that, that it is showing
    tabBarStyle:{
        backgroundColor:Colours.creeamish.fromCH,
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
    

        tabBarIcon:({color})=>{//so this is how you do arguement, i don't know about parameter, but arguement in java, in, mmmh, in javascript
            if(route.name==="Listings"){
             return <FontAwesome6 name='house-crack' size={24}color={color} />;//weuh, mmh, weuh, mmh, weuh, mmh, wueh even a return mmh, thing
            }
            else if(route.name==='CreateListing'){
       return <MaterialIcons name="create-new-folder" size={30} color={color} />
     }
     else if(route.name==='Trust'){
         return <MaterialIcons name="luggage" size={29} color={color} />
        }
            else if(route.name==='Profile'){
          return <AntDesign name="user" size={27} color={color} />
        }

            

        },
          tabBarActiveTintColor: '#1a73e8',
    tabBarInactiveTintColor: '#999',

    }),
    screens:{
        Listings:{
            screen:Listings,
        }, 

        CreateListing:{
            screen:CreateListing,
        }, 



        Trust:{
            screen:Trust,
            
        }, 
        
        Profile:{
            screen:Profile,
        }//ok, with the configs, for, mmh, for now, za, mmh, za the 'create'BottomTabNavigator
        //use it for this as the value for, as the value for in the screen config of the ..stackNavigat..
        //remember, mmh, remember, mmh, remember, mmh, that, that, that, what e.g. OTP won't have the, the bottom, mmh, so the screeen value, remain, mmh, remain, mmh, 
        //remain there
        
    }
}

);//karibu, mmh, karibu niseme useCreate.., i don't even know if, if, mmh if it will be at the, at the bottom, search it and bpp was like,daah! that, that, that is why it has the name bottom on it
const configNavigation =createNativeStackNavigator({//tha natives on ios and android (Fragent). Behavior (transitions), performance
    
    initialRouteName:'Account',// that, that, that, mmh, that ikiwa ivi, Account is a string, jjez ati inafaa kuwa inside '', na sii iyo ndio, na, na siiyo ndio string. Javascript* walai. But i, but i appreciate this framework juu kutumia Android Studio  ssh!
    //the above 'Account' is just a what? an identifier huku, that in it takes the real Account component, that explains the '' that is for string, so i take back that specific critism on js*, but still in general i still maintain it
    
 screenOptions:()=>({//ii nayo i, i, i won't even, mmh, i would, mmh, i woun't even, i, i, i, i won't bother,mmh, even try to understand, mmh, understand at, at, at, at, at the moment
     headerStyle: {
      backgroundColor: Colours.creeamish.fromCH,
    },   
    headerTintColor: 'black',
    headerTitleStyle: {
        fontSize: 22,
            fontWeight: '200',
            color: 'black',
    },
    headerShadowVisible: false,//removes bottom, mmh, border, removes bottom border/shadow
        tabBarShowLabel: false,   // that, that it changed name by ..version , now, mmh, it is tabBarShowLable, what an identifier name. Well yes, that, mmh, that works,hides the text under the icon, bpp did this, i should have know this, but, i did try na title:.. but uko chini kwa stack while really it is kwa the bottom navigator, mmh, the bottom navigator, mmh, that, that, that, that it is showing
       


    }),

    screens:{// i, i, i, i extracted this as, as a dependency, as an installed dependency
        Account:{
            screen:Account,//noe, mmh, now mmh, now, the single screen
        options:{//izi option zi, mmh, ziweke,mmh, ziweke uku chini, mmh, zi, zi, mmh, ziweke uku chinh, defining them in the bottonNavigationBar, did work how i had, mmmh, how, mmh, how i had structure it
                headerShown:false,
            }
        },
        Listing:{
            screen:bottomNavTab,//so ita, mmh, itaiidetect you know, this navigaton thing..after i don't know having it in, mmh, in the App.tsx works...waah, i can't even explain it, but, mmh, but i have a hint of it
            options:{
                headerShown:true,
                title:'localcyclic'
            }
        },
            Messages:{
            screen:Messages,//so ita, mmh, itaiidetect you know, this navigaton thing..after i don't know having it in, mmh, in the App.tsx works...waah, i can't even explain it, but, mmh, but i have a hint of it
            options:{
                headerShown:true,
            }
        },
            CreateListing:{
            screen:bottomNavTab,//so ita, mmh, itaiidetect you know, this navigaton thing..after i don't know having it in, mmh, in the App.tsx works...waah, i can't even explain it, but, mmh, but i have a hint of it
            options:{
                headerShown:true,
            }
        },
            Trust:{
            screen:bottomNavTab,//so ita, mmh, itaiidetect you know, this navigaton thing..after i don't know having it in, mmh, in the App.tsx works...waah, i can't even explain it, but, mmh, but i have a hint of it
            options:{
                headerShown:true,
            }
        },
         Profile:{
            screen:bottomNavTab,//noe, mmh, now mmh, now, the single screen
            options:{
                headerShown:true,
            }
        },
              OTP:{
            screen:OTP,//noe, mmh, now mmh, now, the single screen
              options: {
                headerShown: false,
            },
        },
    },
})
//then you like wrap it up.. so as to...in the root, in, mmh, in the root file, yea, as as to render in the
//so, so, so, so as to render, so, so, so, os as to render in the the component in//in, mm
//in, mmh, in the root whatever
const WrapConfigNavigatorToRoot = createStaticNavigation(configNavigation);//the identifier is strictly my interpretation
export default function RootNavigator(){
    return(
        <WrapConfigNavigatorToRoot/>
    )
    
}