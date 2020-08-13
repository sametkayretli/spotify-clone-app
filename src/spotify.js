// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

/* We need an endpoint to authenticate the account and leave this job to spotify for us */
export const authEndpoint = "https://accounts.spotify.com/authorize";

/* As soon as we log in successfully, it redirects to localhost:3000 */
const redirectUri = "http://localhost:3000/";

/* Client id for apis and stuff, it belongs to Samet Kayretli
   adaaf209fb064dfab873a71817029e0d
   v1: 6263c61cbc714b8f8920f65cca6f6643
   v2: de2d501c6d04468a96c29467b00bf113 */
const clientId = "6263c61cbc714b8f8920f65cca6f6643";

/* Scopes are the attributes that you can assign in clone app, and basically 
   you say these; you can read the info of music and play or if you haven't
   assigned the attribute of delete music from your library, simply you can't */
const scopes = [
   "user-read-currently-playing",
   "user-read-recently-played",
   "user-read-playback-state",
   "user-top-read",
   "user-modify-playback-state",
];

/* We need to get token hash from url, it looks like this given below
   http://localhost:3000/#access_token=BQDsUx1QcLhx-aHXaqK-Fa3l50IjF0uLBAMvvv.....
   window.location.hash => it goes to window object and find the location of that hash */
export const getTokenFromUrl = () => {

   return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
         let parts = item.split('=');
         initial[parts[0]] = decodeURIComponent(parts[1]);

         return initial;
      },{});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;