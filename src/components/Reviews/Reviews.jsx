import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

import * as TMDBApiService from 'service/tmdb-api-service';

import {
  Author,
  NoReviews,
  Review,
  Header,
  List,
  Item,
  Container,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const controller = new AbortController();

    const fetchReviews = async () => {
      const additionalUrl = `/movie/${movieId}/reviews`;

      try {
        const data = await TMDBApiService.fetchMovies(
          additionalUrl,
          controller
        );
        setReviews(data.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.error('Error happened on server. Please, reload webpage.');
        }
        setReviews([]);
      } 
    };

    fetchReviews();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Container>
      <Header>Reviews</Header>
      {reviews.length ? (
        <List className="reviews-container">
          {reviews.map(review => (
            <Item key={review.id}>
              <Author>Author: {review.author}</Author>
              <Review>{review.content}</Review>
            </Item>
          ))}
        </List>
      ) : (
        <NoReviews>We don't have any reviews for this movie yet.</NoReviews>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
export default Reviews;
