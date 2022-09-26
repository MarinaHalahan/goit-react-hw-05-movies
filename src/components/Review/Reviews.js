import { getReviewsById } from '../../services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList, ReviewItem, ReviewInfo } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviewsById(Number(movieId))
      .then(res => setReviews(res))
      .catch(error => console.log(error));
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewList>
          {reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <ReviewInfo bold>Author: {author}</ReviewInfo>

              <ReviewInfo>{content}</ReviewInfo>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        'There are no reviews:('
      )}
    </>
  );
};
export default Reviews;
