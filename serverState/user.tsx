
import axios from 'axios';

export const verifyPhoneExistsFn = async(phoneNumber:string)=>{
    let apiResponse:any;
    try{
        const {data, status,} = await axios.get(`http://192.168.2.10:8080/users/verifyuser?key=${phoneNumber}`)//axios docs are mistaken, they instructed the use of "" instead of backticks for the url
        apiResponse = {data, status};
        //
        console.log(data);
        console.log("status"+status)
    }
     catch(error:any){
           // The 404 lives HERE:
    apiResponse = { data: error.response?.data, status: error.response?.status };
        }
        return apiResponse;//ok dot data
      
}





