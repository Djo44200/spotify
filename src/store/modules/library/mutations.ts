import type { AlbumType } from "@/models/AlbumType";
import type { LibraryStateProps } from "@/models/LibraryType";

const setAlbumToLibrary = (state: LibraryStateProps, album: AlbumType) => {
  //Check si l'ablbum à déjà été sauvegardé
  const found = state.lists.find(albumList => albumList.url === album.url);

  if (album && found === undefined) {
    //ajout des albums sauvegardés
    state.lists.push(album);
  }
};

export { setAlbumToLibrary };
