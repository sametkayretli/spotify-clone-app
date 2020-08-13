export const initialState = {
   user: null,
   playlists: [],
   playing: false,
   item: null,
   spotify: null,
   top_artists: null,
   discover_weekly: null
   //token: "BQCRW6lF8li_8HSQA5tLfOqCLSRnoqf4gpfMlG7wFNGnmu6mYaEZ4HoW-18eNy_GLa0-qorbIpVob6Qs66DmGI0MXQfZnak9ZOwqnXKQyiH-UzCKWymfP8_5RX4TSht9o1ELn7y5wZDryewjFPBjdF_zaPJjmU59GkblEhBv3MsY5Uq8TAlg"
};


/**
 * state: how it currently looks
 * action: how we can manipulate things
 */
const reducer = (state, action) => {
console.log(action);

   // Action has two properties; type and [payload], which sometimes called action

   switch(action.type){
      case 'SET_USER':
         return {
            // keep the state as it is
            ...state,
            user: action.user
         };
      case 'SET_TOKEN':
         return {
            ...state,
            token: action.token
         };
      case 'SET_PLAYLISTS':
         return {
            ...state,
            playlists: action.playlists
         };
      case 'SET_DISCOVER_WEEKLY':
         return {
            ...state,
            discover_weekly: action.discover_weekly
         }
      case "SET_PLAYING":
         return {
           ...state,
           playing: action.playing
         };
      case "SET_TOP_ARTISTS":
         return {
           ...state,
           top_artists: action.top_artists
         };
      case "SET_ITEM":
         return {
           ...state,
           item: action.item
         };
      case "SET_SPOTIFY":
         return {
           ...state,
           spotify: action.spotify
         };
      default:
         return state;
   }

}

export default reducer;