export async function getToken(clientId: any, clientSecret: any) {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + clientId + ":" + clientSecret,
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
}
