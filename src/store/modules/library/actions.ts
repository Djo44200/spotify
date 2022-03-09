import type { AlbumType } from "@/models/AlbumType";

const saveAlbum = (context: any, album: AlbumType) => {
  context.commit("setAlbumToLibrary", album);
};
export { saveAlbum };
