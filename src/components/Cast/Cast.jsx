import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import * as TMDBApiService from 'service/tmdb-api-service';

import {
  Header,
  Info,
  List,
  Item,
  ActorName,
  ActorImage,
  NoCast,
  Container,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const controller = new AbortController();

    const fetchCast = async () => {
      const additionalUrl = `/movie/${movieId}/credits`;

      try {
        const data = await TMDBApiService.fetchMovies(
          additionalUrl,
          controller
        );
        setCast(data.cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.error('Error happened on server. Please, reload webpage.');
        }
        setCast([]);
      }
    };

    fetchCast();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Container>
      <Header>Cast</Header>
      {cast.length ? (
        <List>
          {cast.map(actor => (
            <Item key={actor.id}>
              {actor.profile_path ? (
                <ActorImage
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <ActorImage
                  src={`https://via.placeholder.com/200x300?text=No+Photo`}
                  alt={`${actor.name} profile`}
                />
              )}
              <Info>
                <ActorName>{actor.name}</ActorName>
                <p>Character: {actor.character}</p>
              </Info>
            </Item>
          ))}
        </List>
      ) : (
        <NoCast>We don't have any information about the cast.</NoCast>
      )}
    </Container>
  );
};

export default Cast;
