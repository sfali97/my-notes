const axios = require('axios');

const postcode = "M130YG";

const apiUrl = `https://api.postcodes.io/postcodes/${postcode.toLowerCase()}`;

var requestConfig = {
    method:'get',
    url: apiUrl,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}


var request = axios.create(requestConfig);
//create and instance of Axios
const axiosInstance = axios.create()
// Use axios instance to creat a request
const postcodeDateRequest = axiosInstance.request(requestConfig);

//handle the response
postcodeDataRequest

  .then(function(response) {

    console.log("Response content (JSON):");

    console.log(response.data);

  })

  .catch(function(error) {

    console.error("An error occurred:");

    console.error(error.message);

  });
