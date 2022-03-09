import clientAPI from "./AxiosConfig";

export default {
  connexion() {
    return clientAPI("https://accounts.spotify.com").post(
      "/authorize?client_id=e5e4811acf954507b1b4a18856327089&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-private%20user-read-email&state=34fFs29kd09"
    );
    // return clientAPI("https://accounts.spotify.com/api").post("/token").then(response=>{
    //   console.log('response',response);

    // });
  },
};
