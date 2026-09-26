import { View, Text,Alert,Linking,TextInputSubmitEditingEvent,ActivityIndicator,Image,StyleSheet,KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import { Colours } from '../looks/Colours';
import { useState, useCallback } from 'react';
import {CustomDropdown, PickFileButton } from '../looks/CustomComponenentTwo';
import { TextInputAlone,BigTextInput,CustomTouchableOpacity } from '../looks/customComponents';
import * as ImagePicker from 'expo-image-picker';
import { postListing } from '../serverState/postListing';
import { useQuery } from '@tanstack/react-query';

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

const [price, setPrice]=useState('');


const { image, isLoading, error, pickImage, success,clearImage } = useImagePicker();


const [type, setType] = useState<string | null>(null);   



const [condition, setCondition] = useState<string | null>(null); 

const [postSuccess, setpostSuccess]=useState(false);
const[postLoading, setpostLoading] = useState(false)

// the function to full send
const DoEVerything = async() =>{

const idd = data?.id;
let wasitSuccess;
try{
wasitSuccess= await postListing(idd,photoURL,bigDescription,price,type,condition)
if(wasitSuccess.data){
  setpostSuccess(true);
}
else if(wasitSuccess.loading) {
  setpostLoading(true);
}
}
catch(e:any){
  console.log(wasitSuccess.error);
}



};

if(postSuccess==true) return (<View style={styles.viewMain}>
  <Text>listing created successfully</Text>
  <Text>Button to create new post</Text>//bpp supposed to refresh create listing screen or something
</View>)
else
    return(
      
        <ScrollView style={styles.viewParent}>:

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
                    <TextInputAlone
                    placeHolder='enter image URL '
                    value={photoURL}
                    onChangeText={(val)=>setphotoURL(val)}
                    />
            
                 </View>





            <View style={styles.viewInputOne}>
               <BigTextInput
                placeHolder={'describe the item. i.e. the name of the item, size or any issues the potential new user should know of'}
                value={bigDescription}
                onChangeText={(val)=>setBigDescription(val)}
              
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
                 placeHolder = {postLoading==false?'full send':<ActivityIndicator size={24} color={Colours.forBanners.valleyOrange}/>}
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
        // Do NOT set Content-Type — RN adds the multipart boundary
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