const API = 'https://2d9b-2402-800-62f8-3d57-3285-a9ff-fe22-a2ae.ap.ngrok.io/'
const URL_GET_TOKEN = API + 'authenticate'
const axios = require('axios');

exports.authenticate = (user, res) => {
    console.log(user)
    axios.post(URL_GET_TOKEN, user)
      .then(response => {
        console.log(response);
        const token = response.data
        return res.status(200).json(token);
      })
      .catch(error => {
        console.log(error);
        return res.status(400).json(error);
      });
}