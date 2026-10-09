
import axios from 'axios';

export const verifyPhoneExistsFn = async(phoneNumber:string)=>{
    let apiResponse:any;
    try{
        const {data, status,} = await axios.get(`http://192.168.2.11:8080/users/verifyuser?key=${phoneNumber}`)//axios docs are mistaken, they instructed the use of "" instead of backticks for the url
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

export const create_Account_for_user = async (key: string, phone: string) => {
  await axios.post(`http://192.168.2.11:8080/users/createuser`, { key, phone });

  const res = await verifyPhoneExistsFn(key);
  if (res.status !== 200) {
    throw new Error(`verify failed with status ${res.status}`);
  }
  return res.data; // the User object
};





