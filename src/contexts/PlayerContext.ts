import { createContext } from 'react';

type Episode ={
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  togglePlay: () => void;
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
}


export const PlayerContext = createContext({} as PlayerContextData);