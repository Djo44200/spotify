import type { AlbumType } from "@/models/AlbumType";
import type { LibraryStateProps } from "@/models/LibraryType";

const setAlbumToLibrary = (state: LibraryStateProps, album: AlbumType) => {
  if (album) {
    //ajout des albums sauvegardés
    state.lists.push(album);
  }
};

export { setAlbumToLibrary };
