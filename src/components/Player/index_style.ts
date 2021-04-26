import styled from "styled-components";

const PlayerContainer = styled.div`
  padding: 3rem 4rem;
  width: 26.5rem;
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
`

const Empty = styled.div`
  opacity: 0.5;
`

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
`

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
`

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
`

const SliderStyle = styled(Progress)`
  flex: 1;
`

const EmptySlider = styled(SliderStyle)`
  width: 100%;
  height: 4px;
  background: ${props => props.theme.colors.primary300};
  border-radius: 2px;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;

    transition: filter 0.2s;

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }

    &:hover:not(:disabled) {
      filter: brightness(0.85);
    }
  }
`

const PlayButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.primary400};

  &:hover:not(:disabled) {
    filter: brightness(0.95);
  }
`;

const ButtonIsActive = styled.button`
  filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);

  &-hover {
    filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)hue-rotate(100deg);
  }
`

export { PlayerContainer, Empty, CurrentEpisode, EmptyPlayer, Progress, SliderStyle, EmptySlider, Buttons, PlayButton, ButtonIsActive }

