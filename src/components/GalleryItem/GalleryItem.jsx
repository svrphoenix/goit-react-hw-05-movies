import PropTypes from 'prop-types';

import emptyPoster from 'images/unavailable-image.jpg';

import {
  MovieHeader,
  MovieWrapper,
  DetailsWrapper,
  UserScore,
} from './GalleryItem.styled';

const GalleryItem = ({ movie }) => {
  if (!movie) {
    return;
  }

  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'No year in base'
    : releaseDate.getFullYear();
  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated';

  return (
    <div>
      <MovieHeader>{`${title} (${releaseYear})`}</MovieHeader>
      <MovieWrapper>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : emptyPoster
          }
          alt={title}
        />
        <DetailsWrapper>
          <UserScore>{`User Score: ${userScore}`}</UserScore>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && genres.length > 0 && (
            <p>{genres.map(item => item.name).join(' ')}</p>
          )}
        </DetailsWrapper>
      </MovieWrapper>
    </div>
  );
};

GalleryItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }),
};

export default GalleryItem;
