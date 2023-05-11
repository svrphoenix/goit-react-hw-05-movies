import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { StyledLink } from 'components/SharedLayout/SharedLayout.styled';
import * as TMDBApiService from 'service/tmdb-api-service';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import { Layout } from 'components/Layout/Layout';

const MovieDetails = () => {
  const { movieId } = useParams();
  const backLinkRef = useRef(useLocation().state?.from ?? '/'); //з рефом і без рефа спробувати

  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //додати відстеження завантаження

  useEffect(() => {
    const controller = new AbortController();
    if (!movieId) {
      return;
    }

    const getMovieDetails = async movieId => {
      const additionalUrl = `/movie/${movieId}`;
      try {
        const data = await TMDBApiService.fetchMovies(
          additionalUrl,
          controller
        );
        console.log(`Інформація про ${movieId}`, data);
        setMovie(data);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') alert(error.message);
        setMovie([]);
        console.log(error.message);
      }
    };
    getMovieDetails(movieId);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Layout>
      <StyledLink
        style={{ color: 'red', backgroundColor: 'black' }}
        to={backLinkRef.current}
      >
        Go back
      </StyledLink>
      <GalleryItem movie={movie} />
      <h3>Additional information</h3>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </Layout>
  );
};

export default MovieDetails;
