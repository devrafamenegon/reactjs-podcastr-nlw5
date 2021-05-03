import styled from "styled-components";

const HomepageComponent = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const LatestEpisodes = styled.section`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  li {
    background: ${props => props.theme.colors.backgroundSecondary};
    border-bottom: 1px solid ${props => props.theme.colors.backgroundDeep};
    padding: 1.25rem;
    border-radius: 1.5rem;
    position: relative;

    display: flex;
    align-items: flex-start;

    img {
      width: 6rem;
      min-width: 6rem;
      height: 100%;
      border-radius: 1rem;
    }
  }

  button {
    position: absolute;
    right: 2rem;
    bottom: 2rem;

    width: 2.5rem;
    height: 2.5rem;
    background: ${props => props.theme.colors.backgroundSecondary};
    border: 1px solid ${props => props.theme.colors.backgroundPrimary};
    border-radius: 0.675rem;
    font-size: 0;

    transition: filter 0.2s;

    img {
      width: 1.5rem;
      min-width: 1.5rem;
      height: 1.5rem;
    }

    &:hover {
      filter: brightness(0.95);
    }
  }

  @media (max-width: 1090px) {
    ul {
      grid-template-columns: 1fr;
    }

    li {
      width: 80vw;
    }
  }

  @media (max-width: 660px) {
    a {
      width: 90%;
    }
  }

  @media (max-width: 525px) {
    button {
      right: 0.6rem;
      bottom: 0.6rem;
    }
  }
`;

const ImageContainer = styled.div`
  width: 6rem;
  min-width: 6rem;
`;

const EpisodeDetails = styled.div`
  flex: 1;
  margin-left: 1rem;

  a {
    display: block;
    color: ${props => props.theme.colors.text800};
    font-family: Lexend, sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4rem;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.875rem;

    &:last-child {
      margin-left: 0.5rem;
      padding-left: 0.5rem;
      position: relative;

      &::before {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: #ddd;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  @media (max-width: 600px) {
    p {
      display: none;
    }
  }
`;

const AllEpisodes = styled.section`
  padding-bottom: 2rem;
  margin-bottom: 8rem;

  @media (max-width: 720px) {
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const AllEpisodesTable = styled.table`
  width: 100%;

  th,
  td {
    padding: 0.75rem;
    border-bottom: 1px solid ${props => props.theme.colors.text100};
  }

  th {
    color: ${props => props.theme.colors.text200};
    text-transform: uppercase;
    font: 500 0.7rem Lexend, sans-serif;
    text-align: left;
  }

  td {
    font-size: 0.875rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.5rem;
    }

    a {
      color: ${props => props.theme.colors.text800};
      font-family: Lexend, sans-serif;
      font-weight: 600;
      text-decoration: none;
      line-height: 1.4rem;
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }

    button {
      width: 2rem;
      height: 2rem;
      background: ${props => props.theme.colors.backgroundSecondary};
      border: 1px solid ${props => props.theme.colors.backgroundDeep};
      border-radius: 0.5rem;
      font-size: 0;

      transition: filter 0.2s;

      img {
        width: 1.25rem;
        height: 1.25rem;
      }

      &:hover {
        filter: brightness(0.95);
      }
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const AllEpisodesCard = styled.section`
  display: none;
  margin-bottom: 9rem;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  li {
    width: 80vw;
    background: ${props => props.theme.colors.backgroundSecondary};
    border-bottom: 1px solid ${props => props.theme.colors.backgroundDeep};
    padding: 1.25rem;
    border-radius: 1.5rem;
    position: relative;

    display: flex;
    align-items: start;

    img {
      width: 6rem;
      min-width: 6rem;
      height: 6rem;
      border-radius: 1rem;
    }
  }

  button {
    position: absolute;
    right: 2rem;
    bottom: 2rem;

    width: 2.5rem;
    height: 2.5rem;
    background: ${props => props.theme.colors.backgroundSecondary};
    border: 1px solid ${props => props.theme.colors.backgroundPrimary};
    border-radius: 0.675rem;
    font-size: 0;

    transition: filter 0.2s;

    img {
      width: 1.5rem;
      min-width: 1.5rem;
      height: 1.5rem;
    }

    &:hover {
      filter: brightness(0.95);
    }
  }

  @media (max-width: 1000px) {
    display: grid;
  }

  @media (max-width: 660px) {
    a {
      width: 90%;
    }
  }

  @media (max-width: 525px) {
    button {
      right: 0.6rem;
      bottom: 0.6rem;
    }
  }
`;

export { HomepageComponent, LatestEpisodes, EpisodeDetails, AllEpisodes, ImageContainer, AllEpisodesTable, AllEpisodesCard};