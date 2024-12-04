// import { MovieType } from "../../Types/film-type";
import { ReviewType } from "../../Types/reviews-type";

type ReviewsProps = {
  review: ReviewType[];
};

function Reviews(props: ReviewsProps) {
  const { review } = props;

  const midIndex = Math.ceil(review.length / 2);
  const firstColumnReviews = review.slice(0, midIndex);
  const secondColumnReviews = review.slice(midIndex);

  const formatDate = (isoString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumnReviews.map((item) => (
          <div className="review" key={item.id}>
            <blockquote className="review__quote">
              <p className="review__text">{item.comment}</p>
              <footer className="review__details" key={item.user.id}>
                <cite className="review__author">{item.user.name}</cite>
                <time className="review__date" dateTime={item.date}>{formatDate(item.date)}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{item.rating}</div>
          </div>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {secondColumnReviews.map((item) => (
          <div className="review" key={item.id}>
            <blockquote className="review__quote">
              <p className="review__text">{item.comment}</p>
              <footer className="review__details" key={item.user.id}>
                <cite className="review__author">{item.user.name}</cite>
                <time className="review__date" dateTime={item.date}>{formatDate(item.date)}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{item.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;