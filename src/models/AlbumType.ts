interface AlbumType {
  name: string;
  images: images[];
  duree: number;
  date: string;
  url: string;
}
interface images {
  height: number;
  url: string;
  width: number;
}

export { AlbumType };
