import type { AlbumType } from "./AlbumType";

interface SearchStateProps {
  artists: [];
  tracks: AlbumType[];
}

interface SearchType {
  artists: [];
  tracks: AlbumType[];
}

interface Response {
  artists: ArtistsType;
  tracks: TracksType;
}
interface TracksType {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: [];
}
interface ArtistsType {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: [];
}
export { SearchStateProps, SearchType, Response };
