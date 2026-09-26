
import axios from 'axios';

export const verifyPhoneExistsFn = async(phoneNumber:string)=>{
    let apiResponse:any;
    try{
        const {data, status,} = await axios.get(`http://192.168.2.13:8080/users/verifyuser?key=${phoneNumber}`)//axios docs are mistaken, they instructed the use of "" instead of backticks for the url
        apiResponse = {data, status};
        //192.168.2.13
        //192.168.11.55
        //192.168.2.12
        //192.168.88.100
        console.log(data);
        console.log("status"+status)
    }
     catch(error:any){
           // The 404 lives HERE:
    apiResponse = { data: error.response?.data, status: error.response?.status };
        }
        return apiResponse;//ok dot data
      
}





