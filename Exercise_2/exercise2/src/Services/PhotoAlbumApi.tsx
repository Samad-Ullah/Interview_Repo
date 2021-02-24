import {album} from '../Types/AlbumTypes'

export const photoAlbum = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await res.json();
    
    console.log(data);

    const filterResults:album[] = data.map((albobj:album) =>{
        return{

            albumId: albobj.albumId,
            id: albobj.id,
            url:albobj.url,
            thumbnailUrl: albobj.thumbnailUrl,
            title: albobj.title


        }
 
    })
    return filterResults;
}