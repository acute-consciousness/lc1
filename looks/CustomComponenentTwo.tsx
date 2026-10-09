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
import { ReactNode } from 'react';

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
            <View style={{alignItems:'center'}}>
            <TouchableOpacity 
            onPress={props.onPress} 
            style={styles.viewPickFile
             }>
                <MaterialIcons 
                name="photo-size-select-actual" size={40} color={Colours.greys.one} />             
            </TouchableOpacity>
            </View>
        )
    }


const CustomDropdown = ({ items, value, onValueChange, placeholder }: CustomDropdownProps) => {
  const [open, setOpen] = useState(false);

  const selectedItem = items.find((i) => i.value === value);

  return (
    <View>
      <TouchableOpacity style={styles.main} onPress={() => setOpen(true)}>

        <Text style={selectedItem ? styles.mainText : styles.placeholderText}>
          {selectedItem ? selectedItem.label : placeholder = placeholder}
        </Text>

        <Text>
          <MaterialIcons name="navigate-next" size={32} color="black" /> 
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
  main: {
    backgroundColor: Colours.thatIlike.darkish,
   borderRadius:4,
    paddingTop:10,
    paddingBottom:10,
           width: '100%',      
          flexDirection: 'row',
    justifyContent: 'space-between',
        
  },
  mainText: { 
     fontSize: 13,
           fontWeight: '400',
    color: Colours.greys.one,
    marginRight:15,
    marginLeft:15,

  
    },
  placeholderText: {
    flexDirection:'row',
    fontSize: 16,
           fontWeight: '400',
           color:Colours.greys.one,
      marginRight:15,
         paddingHorizontal: 25,
   
    },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    
  },
  sheet: {
           backgroundColor:Colours.thatIlike.darkish,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    maxHeight: '60%',
    paddingVertical: 1,
    
  },
  option: {
    alignItems:'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 0.4,
    borderBottomColor: Colours.border.materialCategory,
    
  },
  optionText: {
    fontSize: 14,
           fontWeight: '500',
           color: Colours.blacks.clubHPlaceholders,

  },

        viewPickFile:{
          justifyContent:'center',
           paddingTop:2,
           paddingVertical:5,
          
       

},
});

export {CustomDropdown, PickFileButton};

//isDisable
//onPress
//touchableText