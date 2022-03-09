import type { LibraryStateProps } from "@/models/LibraryType";

const getLibraryAlbums = (state: LibraryStateProps) => {
  const { lists } = state;
  return lists;
};

export { getLibraryAlbums };
