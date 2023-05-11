import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import * as TMDBApiService from 'service/tmdb-api-service';
import SearchForm from 'components/SearchForm/SearchForm';
import Gallery from 'components/Gallery/Gallery';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();


  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    if (!query) return;
    const controller = new AbortController();

    const fetchMovieByQuery = async () => {
      try {
        const data = await TMDBApiService.searchMovies(query, controller);

        if (data.length === 0) {
          alert('No movies found');
          setMovies([]); // очищаємо масив фільмів
        } else {
          setMovies(data.results); // записуємо масив фільмів
        }
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') alert(error.message);
        console.log(error);
        setMovies([]);
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
    <main>
      <section>
        <h2>Movies Page</h2>
        <SearchForm onSubmit={handleSubmit} />
        <Gallery movies={movies} location={location} />
      </section>
    </main>
  );
};

export default Movies;
