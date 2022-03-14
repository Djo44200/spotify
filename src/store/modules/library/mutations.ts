import type { AlbumType } from "@/models/AlbumType";
import type { LibraryStateProps } from "@/models/LibraryType";

const setAlbumToLibrary = (state: LibraryStateProps, album: AlbumType) => {
  //Check si l'ablbum à déjà été sauvegardé
  const found = state.lists.find(
    (albumList) => albumList.name === album.name && albumList.url === album.url
  );

  if (album && found === undefined) {
    //ajout des albums sauvegardés
    state.lists.push(album);
  }
};
const setRemoveAlbumToLibrary = (state: LibraryStateProps, album: AlbumType) => {
  const index = state.lists.findIndex(function(o){
    return o.name === album.name && o.url === album.url;
})
if (index !== -1) state.lists.splice(index, 1);

};
export { setAlbumToLibrary,setRemoveAlbumToLibrary };
