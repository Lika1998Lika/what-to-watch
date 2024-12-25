import { ReviewType } from "../Types/reviews-type";

export const reviews: ReviewType[] = [
  {
    id: 1,
    filmId: 1,
    rating: 5.5,
    comment: '1 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in years',
    date: 'December 24, 2016',
    user : {
      id: 1,
      name: 'Kate Muir',
    }
  },
  {
    id: 2,
    filmId: 2,
    rating: 8,
    comment: '2 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in years',
    date: '2024-07-14T10:05:37.283Z',
    user : {
      id: 2,
      name: 'Kate Muir',
    }
  },
  {
    id: 3,
    filmId: 3,
    rating: 9.9,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in years',
    date: 'December 24, 2016',
    user : {
      id: 3,
      name: 'Kate Muir',
    }
  },
  {
    id: 4,
    rating: 3.6,
    filmId: 4,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in years',
    date: 'December 24, 2016',
    user : {
      id: 4,
      name: 'Kate Muir',
    }
  },
  {
    id: 5,
    filmId: 5,
    rating: 8.6,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in years',
    date: 'December 24, 2016',
    user : {
      id: 5,
      name: 'Kate Muir',
    }
  },
];