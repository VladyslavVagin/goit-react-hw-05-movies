import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/request-api';
import { ListReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsArray, setReview] = useState([]);

  useEffect(() => {
    const showReview = async () => {
      try {
        const response = await getMovieReviews(movieId);
        const reviews = response.data.results;
        if(response.data.total_results > 0) {
          setReview(reviews);
        }
      } catch (error) {
        console.log(error);
      }
    }
   showReview();
  }, [movieId])

  return (
    <div>
      <ListReviews>
        {reviewsArray.length > 0 ? reviewsArray.map(({id, author, content}) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
            <hr />
          </li>
        )) : <li><strong>No have any review for this movie</strong></li>}
      </ListReviews>
    </div>
  )
}

export default Reviews