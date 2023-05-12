import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

import * as TMDBApiService from 'service/tmdb-api-service';

import Gallery from 'components/Gallery/Gallery';
import { Layout } from 'components/Layout/Layout';
import { Section } from 'components/Section/Section.styled';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    const getTrendingMovies = async () => {
      const additionalUrl = '/trending/movie/day';
      try {
        const data = await TMDBApiService.fetchMovies(
          additionalUrl,
          controller
        );
        setMovies(data.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.error('Error happened on server. Please, reload webpage.');
        }
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Section>
      <Layout>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h2>Trending today</h2>
            {movies.length > 0 ? (
              <Gallery movies={movies} location={location} />
            ) : (
              <p>There are no movies trending...</p>
            )}
          </>
        )}
        <Toaster position="top-right" reverseOrder={false} />
      </Layout>
    </Section>
  );
};

export default Home;
