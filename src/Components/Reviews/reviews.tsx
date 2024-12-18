import { useAppSelector } from "../../Hooks/hooks";

function Reviews() {
  const reviews = useAppSelector((state) => state.reviews);

  const midIndex = Math.ceil(reviews.length / 2);
  const firstColumnReviews = reviews.slice(0, midIndex);

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
    </div>
  );
}

export default Reviews;