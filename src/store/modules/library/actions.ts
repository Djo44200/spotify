import type { AlbumType } from "@/models/AlbumType";

const saveAlbum = (context: any, album: AlbumType) => {
  context.commit("setAlbumToLibrary", album);
};
const removeAlbum = (context: any, album: AlbumType) => {
  context.commit("setRemoveAlbumToLibrary", album);
};
export { saveAlbum,removeAlbum };
