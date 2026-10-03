import { View, Text,Alert,Linking,TouchableOpacity,TextInputSubmitEditingEvent,ActivityIndicator,Image,StyleSheet,KeyboardAvoidingView, Platform, ScrollView, TextInput} from 'react-native';
import { Colours } from '../looks/Colours';
import { useState, useCallback } from 'react';
import {CustomDropdown, PickFileButton } from '../looks/CustomComponenentTwo';
import { TextInputAlone,BigTextInput } from '../looks/customComponents';
import { CustomTouchableOpacity } from '../looks/customComponents';
import * as ImagePicker from 'expo-image-picker';
import { postListing } from '../serverState/postListing';
import { useQuery } from '@tanstack/react-query';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const MaterialCategory = [
  { label: 'Chair', value: 'chair' },
  { label: 'Table', value: 'table' },
  { label: 'Bed', value: 'bed' },
  { label: 'stand', value: 'stands' },
  { label: 'Sofa', value: 'sofa' },
  { label: 'Wardrobe', value: 'wardrobe' },
  { label: 'Mattress', value: 'mattress' },
  { label: 'Other', value: 'other' },
];

export const MaterialCondition = [
  { label: 'Like new', value: 'likeNew' },
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



type User = {
  id: number|undefined;
  email: string;
  key: string;
  latitude: string;
  longititude: string; 
  phonenumber: string;
  username: string;
};




const CreateListing= (props:posts)=>{
  const {data} = useQuery<User>({
      queryKey: ['user'],
    queryFn: () => {
      throw new Error('No user in cache');
    },
    enabled: false,
  })




const[bigDescription, setBigDescription]=useState('');

const [photoURL,setphotoURL] = useState('');

const [title,setTitle] = useState('');

const [price, setPrice]=useState('');


const { image, isLoading, error, pickImage, success,clearImage } = useImagePicker();


const [type, setType] = useState<string | null>(null);   



const [condition, setCondition] = useState<string | null>(null); 

const [postSuccess, setpostSuccess]=useState(false);
const[postLoading, setpostLoading] = useState(false)



const DoEVerything = async() =>{

const idd = data?.id;
setpostLoading(true);
let wasitSuccess;
try{
wasitSuccess= await postListing(idd,photoURL,title,bigDescription,price,type,condition)
setpostSuccess(true);
setphotoURL('')
setTitle('');
setBigDescription('');
setPrice('');
setType(null);
setCondition(null);


}
catch(e:any){
  console.log(wasitSuccess.error);
}
finally{
  setpostLoading(false);
}



};
const createAgain =()=>{
  setpostSuccess(false);

}

if(postSuccess==true) return (
<View style={styles.viewMain}>
  <View style={styles.viewofCorrect}>
  <View style={styles.correct}>
    <MaterialIcons name="done" size={24} color={Colours.greens.jamieGreenDeep} />
    <Text style={styles.correctText}>post successful</Text>
  </View>
     <TouchableOpacity onPress={createAgain} style={{
    backgroundColor:Colours.blues.valleyBlue,
           paddingVertical: 15,
    paddingHorizontal: 50,  
    borderRadius:4,
    alignItems:'center'

   }}>
      <Text style={styles.btnText}>add another one</Text>


                 </TouchableOpacity>
                 </View>
</View>
)
else
    return(
      
        <ScrollView style={styles.viewParent}>:

        <View style={styles.viewMain}>
                     
                  <View style={styles.viewInputOne}>
                    <View style={{
                      justifyContent:'center',
                      alignItems:'center'
                    }}>
                    <TextInput style={styles.textInput}
                    placeholderTextColor={Colours.greys.one}
                       placeholder='paste image URL '
                    value={photoURL}
                    onChangeText={(val)=>setphotoURL(val)} 
                    />            
                    </View>
                 </View>

                  <View style={styles.viewInputOne}>
                       <View style={styles.viewLabel}>
              <Text style={styles.label}>posting title</Text>
              </View>
                    <TextInputAlone
                    placeHolder='e.g. clothing rank, stool, used sofa '
                    value={title}
                      limit={14} 
                    onChangeText={(vall)=>setTitle(vall)}
                    />
            
                 </View>


                    <View style={styles.viewInputOne}>
              <View style={styles.viewLabel}>
              <Text style={styles.label}>additional description</Text>
              </View>
               <BigTextInput
                placeHolder={'such size of the item or any issues the potential new user should know of'}
                value={bigDescription}
                onChangeText={(val)=>setBigDescription(val)}
              
                />                
                 </View>

<KeyboardAvoidingView>

                    <View style={styles.viewInputOne}>
                       <View style={styles.viewLabel}>
              <Text style={styles.label}>price</Text>
              </View>
                    <TextInputAlone
                    placeHolder='type free or the price '
                    value={price}
                    onChangeText={(val)=>setPrice(val)}
                    />
            
                 </View>
                 </KeyboardAvoidingView>
                

              


                 <View style={styles.viewInputOne}>

<CustomDropdown
  items={MaterialCategory}
  value={type}
  onValueChange={(val:any) => setType(val)}
  placeholder="choose furniture"
/>
                 </View>



                 <View style={styles.viewInputOne}>
<CustomDropdown
  items={MaterialCondition}
  value={condition}
  onValueChange={(val:any) => setCondition(val)}
  placeholder="choose perceived condition"
/> 
                 </View>

<View style={styles.ViewTwoThree}>

                 <TouchableOpacity onPress={DoEVerything} style={{
    backgroundColor:Colours.blacks.bitMOreTwo,
           paddingVertical: 15,
    paddingHorizontal: 50,  
    borderRadius:8,
    alignItems:'center',
    width:'70%'

   }}>
                 {postLoading
    ? <ActivityIndicator size={24} color={Colours.forBanners.valleyOrange} />
    : <Text style={styles.btnText}>full send!</Text>}


                 </TouchableOpacity>

</View>

               

                 
              



           


            </View>
            </ScrollView>
    )
}
const styles=StyleSheet.create({
  viewofCorrect:{
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:'100%',
    backgroundColor:Colours.creeamish.fromCH,
 
  },
    correct:{
      flexDirection:'row',
      marginBottom:10,
      backgroundColor:Colours.creeamish.fromCH,
           borderWidth:0.8,
           borderRadius:5,
           borderColor:Colours.greys.one,
           paddingTop:7,
       
             textAlign:'center', // Android: anchors text/placeholder to top
           width: '100%',

    },
    correctText:{
      color:Colours.greens.ileyaJamieGreen,

    },
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
textInput:{
     fontSize: 13,
      fontWeight: '400',
       backgroundColor:Colours.creeamish.fromCH,
           color: Colours.blacks.clubHPlaceholders,
           borderBottomWidth:0.8,
           borderColor:Colours.greys.one,
           paddingTop:8,
           paddingHorizontal:25,
             textAlign:'center',
           width: '80%',   
},
viewInputOne:{
marginTop:10,
},
viewLabel:{

  alignItems:'center',
},
label:{
  fontSize:13,
            color: Colours.blacks.bitMOreTwo,
},


viewPickFile:{
    marginTop:20,
},

PickFile:{
textAlign:'center',
},
 btnText:{
              fontSize: 14,
    fontWeight: '600',
    color: Colours.creeamish.fromCH, 
        },
 ViewTwoThree:{
  marginTop:10,
            width: '100%',  
            alignItems:'center'
        },
})
export default CreateListing;




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
  isUploading: boolean;
  error: string | null;
  success: boolean;
  pickImage: () => Promise<PickedImage | null>;
  uploadImage: () => Promise<boolean>;
  clearImage: () => void;
}

const API_URL = "http://YOUR_SERVER/api/photos";

export function useImagePicker(): UseImagePickerResult {
  const [image, setImage] = useState<PickedImage | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const ensurePermission = useCallback(async (): Promise<boolean> => {
    const { granted, canAskAgain } =
      await ImagePicker.getMediaLibraryPermissionsAsync();
    if (granted) return true;
    if (!canAskAgain) {
      Alert.alert(
        "Permission required",
        "Photo library access is disabled. Enable it in Settings to pick an image.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Open Settings", onPress: () => Linking.openSettings() },
        ]
      );
      return false;
    }
    const requestResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!requestResult.granted) {
      setError("Permission to access photos was denied.");
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
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setIsLoading(false);
      return null;
    }
  }, [ensurePermission]);

  const uploadImage = useCallback(async (): Promise<boolean> => {
    if (!image) {
      setError("No image selected.");
      return false;
    }

    setIsUploading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();

      formData.append("photo", {
        uri: image.uri,
        name: image.fileName ?? "photo.jpg",
        type: image.mimeType ?? "image/jpeg",
      } as any);

      formData.append("width", image.width.toString());
      formData.append("height", image.height.toString());

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
       
      });

      if (!res.ok) {
        throw new Error(`Upload failed: ${res.status}`);
      }

      const data = await res.json();
      setSuccess(true);
      setIsUploading(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
      setIsUploading(false);
      return false;
    }
  }, [image]);

  const clearImage = useCallback(() => {
    setImage(null);
    setError(null);
    setSuccess(false);
  }, []);

  return { image, isLoading, isUploading, error, success, pickImage, uploadImage, clearImage };
}