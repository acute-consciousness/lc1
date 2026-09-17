import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  KeyboardTypeOptions
} from 'react-native';
import { Colours } from './Colours';
interface DropdownItem {
  label: string;
  value: string;
}
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ReactNode } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

 interface TextInputProps {
    label?:ReactNode;
        placeHolder?:string;
        value?:string;
        onChangeText?:(e:any)=>void;
        onSubmitEditing?:(e:any)=>void;
        touchableText?:string;
        keyboardType?:KeyboardTypeOptions;
        disabled?:boolean;
        onPress?:(e:any)=>void;
    
        
    }



interface CustomDropdownProps {
  items: DropdownItem[];
  value?: string | null;
  onValueChange: (value: string, item: DropdownItem) => void;
  placeholder?: string;
}






  const PickFileButton =(props:TextInputProps)=>{
        return(
            <View>
            <TouchableOpacity 
            onPress={props.onPress} 
            style={styles.viewPickFile
             }>
                <MaterialIcons 
              /**   style={{
                    marginRight:10
                }} */
                name="create-new-folder" size={29} color={Colours.greys.one} />
                <Text
                 style={{
                    color:Colours.greys.one,
                    fontSize:13,
                }}>Tap to pick a photo</Text>
            </TouchableOpacity>
            </View>
        )
    }


const CustomDropdown = ({ items, value, onValueChange, placeholder }: CustomDropdownProps) => {
  const [open, setOpen] = useState(false);

  const selectedItem = items.find((i) => i.value === value);

  return (
    <View>
      <TouchableOpacity style={styles.trigger} onPress={() => setOpen(true)}>
        <Text style={selectedItem ? styles.triggerText : styles.placeholderText}>
          {selectedItem ? selectedItem.label : placeholder = placeholder}
          <AntDesign name="caret-down" size={10} color="black"/>
        </Text>
        <Text>
          
        </Text>
      </TouchableOpacity>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={() => setOpen(false)}>
          <View style={styles.sheet}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onValueChange(item.value, item);
                    setOpen(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  trigger: {
  backgroundColor:Colours.thatIlike.darkish,
   borderRadius:4,
           borderWidth: 0.4,
           borderBottomWidth:0.4,
           borderColor: '#E0E0E0',
    paddingTop:20,
           paddingVertical:20,
           paddingHorizontal:25,
           width: '100%',      
           alignItems:'center',
        
  },
  triggerText: { 
    flexDirection:'column',
     fontSize: 13,
           fontWeight: '400',
    color: Colours.blacks.clubHPlaceholders,

  
    },
  placeholderText: {
    flexDirection:'row',
    fontSize: 13,
           fontWeight: '400',
    color: Colours.blacks.clubHPlaceholders,
   
    },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    
  },
  sheet: {
           backgroundColor:Colours.thatIlike.darkish,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '60%',
    paddingVertical: 1,
    
  },
  option: {
    alignItems:'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colours.border.materialCategory,
    
  },
  optionText: {
    fontSize: 13,
           fontWeight: '400',
           color: Colours.blacks.clubHPlaceholders,

  },

        viewPickFile:{
          justifyContent:'center',
         backgroundColor:Colours.thatIlike.darkish,
           borderWidth: 0.23,
           borderBottomWidth:0.4,
           borderBottomColor: '#E0E0E0',
           paddingTop:15,
           paddingVertical:15,
           paddingHorizontal:25,
           width: '100%',     
           flexDirection:'row',

},
});

export {CustomDropdown, PickFileButton};

//isDisable
//onPress
//touchableText