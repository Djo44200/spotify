import type { AlbumType } from "@/models/AlbumType";
import type {
  SearchStateProps,
  SearchType,
  Response,
} from "@/models/SearchTypes";

const setSearch = (state: SearchStateProps, profiles: Response) => {
  if (profiles) {
    //récupération des artistes
    state.artists = profiles.artists.items;
    //récupération des Albums
    const albumArray: AlbumType[] = [];
    profiles.tracks.items.forEach((track) => {
      //Construction d'un objet à mettre dans un tableau
      const album: AlbumType = {
        name: track.name,
        images: track.album.images,
        duree: track.duration_ms,
        date: track.album.release_date,
      };
      albumArray.push(album);
      state.tracks = albumArray;
    });
  }
};

export { setSearch };
