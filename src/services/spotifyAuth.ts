// export async function getToken(clientId: any, clientSecret: any) {
//   const result = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: "Basic " + clientId + ":" + clientSecret,
//     },
//     body: "grant_type=client_credentials",
//   });

import clientAPI from "./AxiosConfig";

//   const data = await result.json();
//   return data.access_token;
// }

export async function getAuth() {
  //Récupération du code
  const code = await clientAPI('https://accounts.spotify.com').get('/authorize?s',{
    params:{
      'response_type': 'code',
      'client_id': 'e5e4811acf954507b1b4a18856327089',
      scope: 'user-read-private user-read-email',
      redirect_uri: 'http://localhost:3000/',
      
      
    }
  }).then((response)=>{
    return response.data.code;
    
  })
  
  //récupération du token
  clientAPI('https://accounts.spotify.com').post('/api/token',{
    params:{
      code:code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/',
    },
    headers:{
      'Authorization': 'Basic ' + (new Buffer('e5e4811acf954507b1b4a18856327089' + ':' + 'a2cdd952897946119a8c7c430bdf324c').toString('base64'))
      
    }
  }).then(response=>{
    return response.data.access_token;
    
  })

}