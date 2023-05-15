import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import * as TMDBApiService from 'service/tmdb-api-service';

import SearchForm from 'components/SearchForm/SearchForm';
import Gallery from 'components/Gallery/Gallery';
import { Section } from 'components/Section/Section.styled';
import { Layout } from 'components/Layout/Layout';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) return;

    const controller = new AbortController();
    setIsLoading(true);

    const fetchMovieByQuery = async () => {
      try {
        const data = await TMDBApiService.searchMovies(query, controller);

        if (data.results.length === 0) {
          toast('No movies found');
          return;
        }
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

    fetchMovieByQuery();
    return () => {
      controller.abort();
    };
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <Section>
      <Layout>
        <SearchForm onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        <Gallery movies={movies} location={location} />
      </Layout>
    </Section>
  );
};

export default Movies;
