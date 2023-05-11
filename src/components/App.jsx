import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';
import NotFound from 'pages/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
