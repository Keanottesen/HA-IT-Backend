const axios = require("axios");
require('dotenv').config();
const artists = require('./config/artistIds');

for (var i = 0; i < artists.length; i++) {
  console.log(artists[i]);
  axios({
      "method":"GET",
      "url":"https://deezerdevs-deezer.p.rapidapi.com/artist/" + artists[i],
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":process.env.X_RapidAPI_Host,
      "x-rapidapi-key":process.env.X_RapidAPI_Key
      }
      })
      .then((response)=>{
        console.log(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
}
