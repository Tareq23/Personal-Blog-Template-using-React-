
import axios from 'axios';


export default class RestClient
{


    static GetRequest = ($url) =>
    {
      return  axios.get($url)
             .then(function(response){
                return response.data;
             })
             .catch(function(error){
                return null;
             });
             
    }

}













