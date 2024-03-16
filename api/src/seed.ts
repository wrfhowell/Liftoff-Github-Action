// src/types.ts
export interface Song {
    id: number;
    title: string;
    artist: string;
    album: string;
  }
  
  let songs: Song[] = [
    { id: 1, title: 'Yesterday', artist: 'The Beatles', album: 'Help!' },
    { id: 2, title: 'Imagine', artist: 'John Lennon', album: 'Imagine' },
  ];
  

  export const data = {
    songs
  };