import PropTypes from 'prop-types';

import { List } from './Gallery.styled';
import { StyledLink } from './Gallery.styled';

const Gallery = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </li>
      ))}
    </List>
  );
};

export default Gallery;

Gallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};