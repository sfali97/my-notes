const axios = require('axios');

const postcode = "M130YG";

const apiUrl = `https://api.postcodes.io/postcodes`;

var requestConfig = {
    method:'post',
    url: apiUrl,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    data:{
        "postcodes" : ["M130YG","OX49 5NU"],
    }
}


var request = axios.create(requestConfig);
//create and instance of Axios
const axiosInstance = axios.create()
// Use axios instance to create a request
const postcodeDateRequest = axiosInstance.request(requestConfig);

//handle the response
postcodeDateRequest

  .then(function(response) {

    console.log("Response content (JSON):");

    console.log(response.data);

  })

  .catch(function(error) {

    console.error("An error occurred:");

    console.error(error.message);

  });
