import emptyPoster from 'images/unavailable-image.jpg';

const GalleryItem = ({ movie }) => {
  console.log('Проп movie', movie);

  if (movie.Length === 0) {
    return;
  }

  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : emptyPoster
        }
        alt={title}
      />
      <p>{`User Score: ${Math.round(vote_average * 10)}%`}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && genres.length > 0 && (
        <p>{genres.map(item => item.name).join(' ')}</p>
      )}
    </div>
  );
};

export default GalleryItem;
