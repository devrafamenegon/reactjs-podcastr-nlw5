import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { usePlayer } from '../../contexts/PlayerContext';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

import styles from './styles.module.scss';
import { PlayerContainer, CurrentEpisode, EmptyPlayer, Progress, SliderStyle, EmptySlider, Buttons, PlayButton, ButtonIsActive } from './index_style'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const { 
    episodeList, 
    currentEpisodeIndex, 
    isPlaying, 
    isLooping,
    isShuffling,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    setPlayingState,
    clearPlayerState,
  } 
  = usePlayer();

  useEffect(() => {
    if(!audioRef.current) {
      return;
    }

    if(isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying])

  function setupProgressListener() {
    audioRef.current.currentTime = 0;
    
    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    })
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodesEnded() {
    if(hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  const episode = episodeList[currentEpisodeIndex];

  return (
    <PlayerContainer>
      <header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

      { episode ? (
        <CurrentEpisode>
          <Image 
            width={592} 
            height={592} 
            src={episode.thumbnail} 
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </CurrentEpisode>
      ) : (
        <EmptyPlayer>
          <strong>Selecione um podcast para ouvir</strong>
        </EmptyPlayer>
      ) }

      <footer className={!episode ? styles.empty : ''}>
        <Progress>
          <span>{convertDurationToTimeString(progress)}</span>
          <SliderStyle>
            { episode ? (
              <Slider 
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff'}}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4}}
              />
              ) : (
                <EmptySlider />
              ) 
            }
          </SliderStyle>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </Progress>

        { episode && (
          <audio 
            src={episode.url}
            ref={audioRef}
            loop={isLooping}
            autoPlay
            onEnded={handleEpisodesEnded}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupProgressListener}
          />
        )}

        <Buttons>
          
          { isShuffling ? (
          <ButtonIsActive 
            type="button" 
            onClick={toggleShuffle} 
            disabled={!episode || episodeList.length == 1}
          >
            <img src="/shuffle.svg" alt="Embaralhar" />
          </ButtonIsActive>
          ) : (
            <button 
              type="button" 
              onClick={toggleShuffle}
              disabled={!episode || episodeList.length == 1}
            >
              <img src="/shuffle.svg" alt="Embaralhar" />
            </button>
          )}


            
          <button type="button" onClick={playPrevious} disabled={!episode || !hasPrevious}>
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>
          <PlayButton 
            type="button" 
            disabled={!episode}
            onClick={togglePlay}
          > 
            { isPlaying ? (
              <img src="/pause.svg" alt="Tocar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}

          </PlayButton>
          <button type="button" onClick={playNext} disabled={!episode || !hasNext}>
            <img src="/play-next.svg" alt="Tocar próxima" />
          </button>
          <button 
            type="button" 
            onClick={toggleLoop} 
            className={isLooping ? styles.isActive : ''} 
            disabled={!episode}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </Buttons>
      </footer>
    </PlayerContainer>
  );
}