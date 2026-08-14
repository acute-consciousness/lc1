import {Text} from 'react-native';
/**a button and so on, soo.., what comes to mind is the props, is, is the props thing
 * can,can,can,can,can,can,can i remember props, let, let, let us try it out, waah, i can't, i can't remember props
 * 
 */
type componentsText = {
    button:String,
    textinputPlaceholder:String
} 

const button = (props:componentsText) => {
    return(
<button>
    <Text>{props.button}</Text>
</button>
    )
}

const textInput = () => {
}
export default {button,textInput};