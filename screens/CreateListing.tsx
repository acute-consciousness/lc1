import { View, Text,Alert,Linking,TextInputSubmitEditingEvent,Image,StyleSheet,KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import { Colours } from '../looks/Colours';
import { useState, useCallback } from 'react';
import {CustomDropdown, PickFileButton } from '../looks/CustomComponenentTwo';
import { TextInputAlone,BigTextInput,CustomTouchableOpacity } from '../looks/customComponents';
import * as ImagePicker from 'expo-image-picker';

const MaterialCategory = [
  { label: 'Chair', value: 'chair' },
  { label: 'Table', value: 'table' },
  { label: 'Bed', value: 'bed' },
  { label: 'stand', value: 'stands' },
  { label: 'Sofa', value: 'sofa' },
  { label: 'Wardrobe', value: 'wardrobe' },
  { label: 'Mattress', value: 'mattress' },
  { label: 'Other', value: 'other' },
];

const MaterialCondition = [
  { label: 'Like new', value: 'like new' },
  { label: 'excellent', value: 'excellent' },
  { label: 'good', value: 'good' },
  { label: 'fair', value: 'fair' },
  { label: 'salvagable', value: 'salvagable' },
];

interface posts{ photo?:string;
         description?:string;
        price?:number;
        location?:{long:number,latt:number}; 


}






const CreateListing= (props:posts)=>{//bado exporting, mmmh, inanikalia
  //me
  //big description
const[bigDescription, setBigDescription]=useState('');//yea, let us have an empty sting, alright.i'm not even aware of the value form custom...


  //the price
const [price, setPrice]=useState('');


//the photo
const { image, isLoading, error, pickImage, success,clearImage } = useImagePicker();

//the type of furniture,   you wanna floss with the word materiality?
const [type, setType] = useState<string | null>(null);   



const [condition, setCondition] = useState<string | null>(null); 

//get date and time
const CustomDateTime = async (): Promise<Date | null> => {
  try {
    const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=UTC');
    const data = await response.json();
    return new Date(data.dateTime);
  } catch (err) {
    console.log('Failed to fetch network time:', err);
    return null;
  }
};


// the function to full send
const DoEVerything = async() =>{
//will have an async when sending but for now
console.log("what does photo give, what type i mean?, and, mmh, and is there anything there"+image);
console.log("Big Description:"+bigDescription);
console.log("Price:"+price);
console.log("type of furniture:"+type);
console.log("condition:"+condition)

const dateTime = await CustomDateTime();
if (dateTime!=null){
  const dayOnly = dateTime.getDate();
  const monthOnly  = dateTime.getMonth();
  const yearOnly  = dateTime.getUTCDate;

  console.log("date:"+dayOnly); 
  console.log("month:"+monthOnly); 
  console.log("year:"+dateTime); 
}
else{
  console.log("date not found")
}

};



    return(
      
        <ScrollView style={styles.viewParent}>


        <View style={styles.viewMain}>
                     

                <View style={styles.viewPickFile}>
                <PickFileButton onPress={pickImage} />
                <View style={{alignItems:'center'}}>
              {isLoading && 
              <Text style={{fontSize:13,color:Colours.greens.openLibrary}}>
                ...
                </Text>
              }
               {error && <Text style={{ color:Colours.reds.one }}>{error}</Text>}
                {!isLoading && success && (
                <Text style={{fontSize:13,color:Colours.greens.openLibrary}}>
                photo fetched successfully
                </Text>
               )}
                  {image && (
                <Image source={{ uri: image.uri }}  />
                    )}
</View>
                </View>





            <View style={styles.viewInputOne}>
               <BigTextInput
                placeHolder={'add a little desciption about the item e.g,\n\nname of the item\n\nwhat is its size - dimensions..\n\nany defects or issues the potential new user should know about?'}
                value={bigDescription}
                onChangeText={(val)=>setBigDescription(val)}
                // onSubmitEditing={}//nah, this held the final..i'm confuesed..this is for a like button and remember will, mmh, will be sending everything,i guess, for, for when someboy is done
                //oh, the button full sent to the api
                />                
                 </View>







                    <View style={styles.viewInputOne}>
                    <TextInputAlone
                    placeHolder='type price or free '
                    value={price}
                    onChangeText={(val)=>setPrice(val)}
                    />
            
                 </View>
                

              


                 <View style={styles.viewInputOne}>
            


<CustomDropdown
  items={MaterialCategory}
  value={type}
  onValueChange={(val:any) => setType(val)}
  placeholder="choose furniture type"
/>
                 </View>



                 <View style={styles.viewInputOne}>
            



<CustomDropdown
  items={MaterialCondition}
  value={condition}
  onValueChange={(val:any) => setCondition(val)}
  placeholder="choose condition"
/>
                 </View>

<View style={styles.viewInputOne}>

                 <CustomTouchableOpacity
                 onPress={DoEVerything}
                 touchableText='full send!'
                 />

</View>

               

                 //hapa
              



           


            </View>
            </ScrollView>
    )
}
const styles=StyleSheet.create({
viewParent:{
    height:'100%',
    width:'100%',
    backgroundColor:Colours.creeamish.fromCH,
},

viewMain:{
      justifyContent: 'center',
      marginLeft:8,
      marginRight:8,
      
}, 

viewPickFile:{
    marginTop:20,
},

PickFile:{
textAlign:'center',
},

viewInputOne:{
marginTop:10,
},
})
export default CreateListing;



//pick image from phone photos folder logic
export interface PickedImage {
uri: string;
width: number;
height: number;
fileName?: string | null;
fileSize?: number | null;
mimeType?: string | null;
}
interface UseImagePickerResult {
image: PickedImage | null;
isLoading: boolean;
error: string | null;
success: boolean;
pickImage: () => Promise<PickedImage | null>;
clearImage: () => void;
}
export function useImagePicker(): UseImagePickerResult {
const [image, setImage] = useState<PickedImage | null>(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const [success, setSuccess] = useState(false);
const ensurePermission = useCallback(async (): Promise<boolean> => {
const { granted, canAskAgain } =
await ImagePicker.getMediaLibraryPermissionsAsync();
if (granted) return true;
if (!canAskAgain) {
Alert.alert(
'Permission required',
'Photo library access is disabled. Enable it in Settings to pick an image.',
[
{ text: 'Cancel', style: 'cancel' },
{ text: 'Open Settings', onPress: () => Linking.openSettings() },
],
);
return false;
}
const requestResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
if (!requestResult.granted) {
setError('Permission to access photos was denied.');
return false;
}
return true;
}, []);
const pickImage = useCallback(async (): Promise<PickedImage | null> => {
setError(null);
setIsLoading(true);
setSuccess(false);
try {
const hasPermission = await ensurePermission();
if (!hasPermission) {
setIsLoading(false);
return null;
}
const result = await ImagePicker.launchImageLibraryAsync({
mediaTypes: ImagePicker.MediaTypeOptions.Images,
allowsEditing: false,
quality: 1,
exif: false,
});
if (result.canceled) {
setIsLoading(false);
return null;
}
const asset = result.assets[0];
const picked: PickedImage = {
uri: asset.uri,
width: asset.width,
height: asset.height,
fileName: asset.fileName,
fileSize: asset.fileSize,
mimeType: asset.mimeType,
};
setImage(picked);
setSuccess(true);
setIsLoading(false);
return picked;
} catch (err) {
setError(err instanceof Error ? err.message : 'Something went wrong.');
setIsLoading(false);
return null;
}
}, [ensurePermission]);
const clearImage = useCallback(() => {
setImage(null);
setError(null);
setSuccess(false);
}, []);
return { image, isLoading, error,success, pickImage, clearImage };
}