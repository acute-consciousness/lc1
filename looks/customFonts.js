/**can i remember how, mmh to set these'customs'. I don't even know if that's how they are called
 * custom it's definition - made according, made according, made according to the specifications of an individual
 * so i think i can call it that
 * waah maybe a component, waah, waah, waah, maybe a component
 * how is even an arrow function written -  bro i can't even remember it
 * but, but its not even an arrow function thing, and its not an array thing from how i remember it
 */
import {useFonts} from 'expo-font';
export const NimbusRegular = () =>{
    const[fontLoaded,error]=useFonts({
        'Nimbus San':require('../assets/fonts/nimbus-sans/NimbusSanL-Reg.otf')
    });//i remember, you know form my usage, state didn't, state didn't, state didn't have an identifier, yeah, yeah, has some kind of unction in it, for what?
    //for if loading and stuff
    //two, two, two, two, two, tow if statements
    if(fontLoaded){
        Text.defaultProps = Text.defaultProps || {};
         Text.defaultProps.style = {
    ...Text.defaultProps.style,
    fontFamily: 'NimbusSansNarrow',
  };
    }
    if(!fontLoaded){
        return null;
    }
    if(error){
        console.log('font not loaded');
    }
}