import axios from "axios"
import { MaterialCategory } from "../screens/CreateListing"


export const postListing = async( id:number|undefined,photo:string,description:string,price:string,type:string|null,condition:string|null) => { 
    // now what?
const response = await axios.post(`http://192.168.2.13:8080/items/createListing`,{
    //192.168.2.13
    //192.168.2.13
    id:id,
    photo: photo.toString(),
    description,
    price,
    type,
    condition,
    createdAt: new Date().toISOString().split("T")[0],
})
 return "it's post listing"+response.data; 
}