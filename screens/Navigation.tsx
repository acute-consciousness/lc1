/**that, that, that, mmh, that 
 * 
 * 
 */
import Account from './Account';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
//then, then, then, then what?. let us try and interprate
const configNavigation =createNativeStackNavigator({//tha natives on ios and android (Fragent). Behavior (transitions), performance
    initialRouteName:'Account',// that, that, that, mmh, that ikiwa ivi, Account is a string, jjez ati inafaa kuwa inside '', na sii iyo ndio, na, na siiyo ndio string. Javascript* walai. But i, but i appreciate this framework juu kutumia Android Studio  ssh!
    //the above 'Account' is just a what? an identifier huku, that in it takes the real Account component, that explains the '' that is for string, so i take back that specific critism on js*, but still in general i still maintain it
    screens:{// i, i, i, i extracted this as, as a dependency, as an installed dependency
        Account:{
            screen:Account,//noe, mmh, now mmh, now, the single screen
              options: {
                headerShown: false,
            },
        }
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