import axios from "axios"
import { MaterialCategory } from "../screens/CreateListing"


export const postListing = async( id:number|undefined,photo:string,title:string,description:string,price:string,type:string|null,condition:string|null) => { 
    // now what?
const response = await axios.post(`http://192.168.2.10:8080/items/createListing`,{
    //
    id:id,
    photo: photo.toString(),
    title,
    description,
    price,
    type,
    condition,
    createdAt: new Date().toISOString().split("T")[0],
})
 return response.data; 
}