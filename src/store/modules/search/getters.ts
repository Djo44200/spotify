import type { SearchStateProps } from "@/models/SearchTypes";

const getAlbums = (state: SearchStateProps) => {
  const { tracks } = state;
  return tracks;
};

export { getAlbums };
