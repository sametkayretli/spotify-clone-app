import React from 'react';
import {useDataLayerValue} from '../DataLayer.js'
import './SongRow.css';

function SongRow ({track="test", spotify}){

   const[{item, playing}, dispatch] = useDataLayerValue();

   const playSong = () => {
      spotify.play();

      dispatch({
         type: 'SET_ITEM',
         item: item
      });

      dispatch({
         type: 'SET_PLAYING',
         playing: true
      });


   };

   return (
      <div className="songRow" onClick={playSong}>
         <img 
            className="songRow__album"
            src={track.album.images[0].url} 
            alt="" 
         />
         <div className="songRow__info">
            <h1>{track.name}</h1>
            <p>
               {track.artists.map(artist => artist.name).join(", ")}
               {track.album.name}
            </p>
         </div>
      </div>
   )
}

export default SongRow;