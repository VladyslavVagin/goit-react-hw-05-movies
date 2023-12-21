import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/request-api';
import { ListReviews, AuthorName, NickName } from './Reviews.styled';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [loadReviews, setLoadReviews] = useState(false);
  const [reviewsArray, setReview] = useState([]);

  useEffect(() => {
    const showReview = async () => {
      try {
        setLoadReviews(true);
        const response = await getMovieReviews(movieId);
        const reviews = response.data.results;
        if (response.data.total_results > 0) {
          setReview(reviews);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadReviews(false);
      }
    };
    showReview();
  }, [movieId]);

  return (
    <div>
      {loadReviews && <Loader />}
      {!loadReviews && (
        <ListReviews>
          {reviewsArray.length > 0 ? (
            reviewsArray.map(({ id, author, content }) => (
              <li key={id}>
                <AuthorName>Author: <NickName>{author}</NickName></AuthorName>
                <p>{content}</p>
                <hr />
              </li>
            ))
          ) : (
            <li>
              <strong>No have any review for this movie</strong>
            </li>
          )}
        </ListReviews>
      )}
    </div>
  );
};

export default Reviews;
