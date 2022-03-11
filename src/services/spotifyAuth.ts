import clientAPI from "./AxiosConfig";
import CryptoJS from 'crypto-js';
//TODO : A mettre dans le .env
const client_id = "";
const client_secret = "";
const BASE64_ENCODED_AUTH_CODE = client_id + ":" + client_secret;



export async function getAuth() {
  //Récupération du code
  return await clientAPI("https://accounts.spotify.com")
    .get("/authorize", {
      params: {
        response_type: "code",
        client_id: client_id,
        scope: "user-read-private user-read-email",
        redirect_uri: "http://localhost:3000/",
        state: "refdfwSdfertg",
        show_dialog: true,
      },
    })
    .then((res) => {
      return res.request.responseURL;
    });
}
export async function getToken(code:string) {
  // récupération du token
  
  await clientAPI('https://accounts.spotify.com').post('/api/token',{
    params:{
      response_type: "token",
      code:code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/',
    },
    headers:{
      'Accept':'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' +  CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(BASE64_ENCODED_AUTH_CODE)),
    },
  }).then(response=>{
    return response.data.access_token;

  })
}