import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as TMDBApiService from 'service/tmdb-api-service';

import Gallery from 'components/Gallery/Gallery';
import { Layout } from 'components/Layout/Layout';
import { Section } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const controller = new AbortController();

    const getTradingMovies = async () => {
      const additionalUrl = '/trending/movie/day';
      try {
        const data = await TMDBApiService.fetchMovies(
          additionalUrl,
          controller
        );
        setMovies(data.results);
      } catch (error) {
        if (error.message !== 'canceled') alert(error.message);
        console.log(error.message);
      }
    };

    getTradingMovies();

    return () => {
      controller.abort();
    };
  }, []);
  // const movies = [...data];
  return (
    <Section>
      <Layout>
        <h2>Trending today</h2>
        {/* <Gallery movies={movies} /> */}
        <Gallery movies={movies} location={location} />
      </Layout>
    </Section>
  );
};

export default Home;
