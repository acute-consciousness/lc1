import {useFonts} from 'expo-font';
export const NimbusRegular = () =>{
    const[fontLoaded,error]=useFonts({
        'Nimbus San':require('../assets/fonts/nimbus-sans/NimbusSanL-Reg.otf')
    });
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