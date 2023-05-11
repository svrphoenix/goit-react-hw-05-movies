import { NavLink } from 'react-router-dom';
import { List } from './Gallery.styled';

const Gallery = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </NavLink>
        </li>
      ))}
    </List>
  );
};

export default Gallery;
