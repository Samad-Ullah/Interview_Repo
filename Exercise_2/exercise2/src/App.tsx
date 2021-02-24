import React, { useEffect , useState } from 'react';
import {photoAlbum} from './Services/PhotoAlbumApi'
import { album } from './Types/AlbumTypes'
import RendorImages from './Components/RendorImages'

import './App.css';

function App( ) {
  const [album, setalbum] = useState([])
  const[title , settitle] = useState('');


  useEffect(() => {
    async function  fetchdata() {
      const Album:album[] = await photoAlbum();

      setalbum(Album);
    }
  })

  const displayAlbum = (e: React.FormEvent<EventTarget>, alb: string) => {
    e.preventDefault();
    const title:album = album[0];
   
    if (alb === title.title) {
      settitle(title);
    }
  }


  return (
    <div className="App">
      <div>
      <RendorImages
        title={album[0].title}
         />
      </div>
      
    </div>
  );
}

export default App;
