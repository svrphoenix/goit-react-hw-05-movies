import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Suspense } from 'react';

import * as TMDBApiService from 'service/tmdb-api-service';

import GalleryItem from 'components/GalleryItem/GalleryItem';
import { Layout } from 'components/Layout/Layout';
import { Button } from 'components/Button/Button.styled';
import { Section } from 'components/Section/Section.styled';
import { Line, ButtonContainer } from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const backLinkRef = useRef(useLocation().state?.from ?? '/');
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const controller = new AbortController();
    setIsLoading(true);

    const getMovieDetails = async movieId => {
      const additionalUrl = `/movie/${movieId}`;
      try {
        const data = await TMDBApiService.fetchMovies(
          additionalUrl,
          controller
        );
        setMovie(data);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.error('Error happened on server. Please, reload webpage.');
        }
        setMovie(null);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails(movieId);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Section>
      <Layout>
        <Button to={backLinkRef.current}>Go back</Button>
        {isLoading && <Loader />}
        <GalleryItem movie={movie} />
        {movie && (
          <>
            <Line />
            <h3>Additional information</h3>
            <ButtonContainer>
              <Button to="cast">Cast</Button>
              <Button to="reviews">Reviews</Button>
            </ButtonContainer>
          </>
        )}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Layout>
    </Section>
  );
};

export default MovieDetails;
