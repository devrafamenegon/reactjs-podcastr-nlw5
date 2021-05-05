import styled, {css} from "styled-components";

interface Buttons {
  isActive?: boolean;
  isPlayButton?: boolean;
}

interface Footer {
  isEmpty?: boolean;
}

const PlayerContainer = styled.div`
  padding: 3rem 4rem;
  width: 28.5rem;
  height: 100vh;

  background: ${props => props.theme.colors.primary500};
  color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  footer {
    align-self: stretch;

    &.empty .progress {
      opacity: 0.5;
    }
  }

  @media (max-width: 1440px) {
    width: 100%;
    height: 8rem;
    padding: 0;

    flex-direction: row;

    position: fixed;
    left: 0;
    bottom: 0;

    header {
      display: none;
    }
  }
`;

const Empty = styled.div`
  opacity: 0.5;
`;

const CurrentEpisode = styled.div`
  text-align: center;

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;
  }
  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    line-height: 1.5rem;
  }

  @media (max-width: 1440px) {
    display: flex;
    padding: 2rem;
    align-items: center;

    img {
      width: 100%;

      border-radius: 20%;
    }
    
    strong {
      display: flex;
      max-height: 5em;
      margin-left: 25px;
      margin-top: 0;

      line-height: 1.25rem;

      font: 600 1rem Lexend, sans-serif;
      text-align: start;

      overflow: hidden;
      text-overflow: ellipsis;
    }

    span{
      display: none;
    }
  }

  @media (max-width: 700px) {
    padding: 1rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 1440px) {
    width: 72px;
    min-width: 72px;
    height: 64px;
    min-height: 64px;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  border: 1.5px dashed ${props => props.theme.colors.primary300};
  border-radius: 1.5rem;
  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    width: 8rem;
    height: 6rem;
    
    padding: 1rem;
    margin-left: 5rem;

    strong {
      font: 600 0.75rem Lexend, sans-serif;
      line-height: 1rem;
    }
  }

  @media (max-width: 718px) {
    display: none;
  }
`;

const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }
`;

const SliderStyle = styled(Progress)`
  flex: 1;
`;

const EmptySlider = styled(SliderStyle)`
  width:100%;
  height: 4px;
  background: ${props => props.theme.colors.primary300};
  border-radius: 2px;

  @media (max-width: 1440px) {
    width: 50vw;
  }
`;

const ButtonsContainer = styled.div<Buttons>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  @media (max-width: 1440px) {
    margin-top: 0.5rem;
  }
`;

const Buttons = styled.button<Buttons>`
  background: transparent;
  border: 0;
  font-size: 0;

  transition: filter 0.2s;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    ${({ isActive }) => isActive ? 'filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)hue-rotate(100deg);' : 'filter: brightness(0.85);'}
  }

  ${({ isActive }) => isActive && css`
    filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
  `}

  ${({ isPlayButton }) => isPlayButton && css`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: ${props => props.theme.colors.primary400};

    &:hover:not(:disabled) {
      filter: brightness(0.95);
    }
  `}
`;

const Footer = styled.footer<Footer>`
  ${({ isEmpty }) => isEmpty && css`
    opacity: 0.5;
  `}

  @media (max-width: 1440px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
  }

  @media (max-width: 500px) {
    padding: 0rem;
  }
`;

export { PlayerContainer, Empty, CurrentEpisode, EmptyPlayer, Progress, SliderStyle, EmptySlider, ButtonsContainer, Buttons, Footer, ImageContainer}

