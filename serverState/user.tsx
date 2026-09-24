
import axios from 'axios';



export const ResponseStatus = (ResponseStat:any) =>{
    const response:any= ResponseStat;
    return (response)
}


export const verifyPhoneExistsFn = async(phoneNumber:string)=>{
    let apiResponse:any;
    try{
        const {data, status,} = await axios.get(`http://192.168.11.55:8080/users/verifyuser?key=${phoneNumber}`)//axios docs are mistaken, they instructed the use of "" instead of backticks for the url
        apiResponse = data;
        //192.168.11.55
        //192.168.2.12
        //192.168.88.100
        console.log(data);
        console.log(status);
        ResponseStatus(status);
    }
     catch(error){
            // <ReturnError feedBackText="Server connection error!"/>, that i can't return a jsx hapa
            console.log("failed!"+error)
        }
        return apiResponse;//ok dot data
      
}




