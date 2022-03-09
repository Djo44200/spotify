import type { AlbumType } from "./AlbumType";

interface SearchStateProps {
  artists: any[];
  tracks: any[];
}

interface SearchType {
  artists: any[];
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
  items: any[];
}
interface ArtistsType {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: any[];
}
export { SearchStateProps, SearchType, Response };
