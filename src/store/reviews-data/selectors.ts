import { NameSpace } from "../../const";
import { ReviewType } from "../../types/reviews-type";
import { State } from "../../types/state";

export const getReviews = (state: State): ReviewType[] => state[NameSpace.ReviewsData].reviews;