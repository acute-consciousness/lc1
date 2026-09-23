
import axios from 'axios';



export const verifyPhoneExistsFn = async(phoneNumber:string)=>{
    let apiResponse:any;
    try{
        apiResponse = await axios.get(`http://192.168.88.100:8080/users/verifyuser?key=${phoneNumber}`)//axios docs are mistaken, they instructed the use of "" instead of backticks for the url
        //192.168.88.100
        //192.168.88.100
        console.log(apiResponse.data)
    }
     catch(error){
            // <ReturnError feedBackText="Server connection error!"/>, that i can't return a jsx hapa
            console.log("failed!"+error)
        }
        return apiResponse.data;//ok dot data
      
}


