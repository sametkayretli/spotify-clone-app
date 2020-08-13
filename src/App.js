import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login/Login.js';
import {getTokenFromUrl} from './spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player/Player.js';
import {useDataLayerValue} from './DataLayer.js';

const spotify= new SpotifyWebApi();

function App() {
  /* --react-context--  
    token: current value 
    setToken: state than can manipulate token current value
    null: initial value
  */
  //const [token, setToken] = useState(null);

  /* if we wanted to dispatch token, user etc, simply wrote down
    as a first argument but we dont wanted to dispatch anything so
    wrote down {}.
    dispatch: as a second argument, it is like a gun everytime we can use it
  */
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();
  
  // Run code based on a given condition
  // if anythnig changes in url run it
  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    // if there is a token hash store, invoke setToken
    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      

      /* spotify: spotify-web-api is assigned to this variable
        setAccessToken: it is a built-in function in spotify api to set the access token we fetched from url
      */
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        //console.log('person: ', user);

        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists 
        });
      });

      spotify.getPlaylist('37i9dQZEVXcUAXdhwGkPYp').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      });

      spotify.getMyTopArtists().then((response) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response
        })
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify
      });

    }

    
  }, []);

  //console.log("User:", user);
  //console.log("token: ", token);
  //console.log("playlists: ", playlists);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
        )
      }

    </div>
  );
}

export default App;
