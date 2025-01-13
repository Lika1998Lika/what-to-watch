export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/my-list',
  Film = '/film',
  AddReview = '/add-review',
  Player = '/player',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
};

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Movies = '/films',
  Comments = '/comments',
};

export const TIMEOUT_SHOW_ERROR = 2000;

export const genriesListFilms = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'
];

 export const genreMap: Record<string, string> = {
  'All genres': 'All genres',
  Comedies: "Comedy",
  Crime: "Crime",
  Documentary: 'Documentary',
  Dramas: "Drama",
  Horror: "Horror",
  'Kids & Family': 'Kids & Family',
  Romance: "Romance",
  'Sci-Fi': 'Sci-Fi',
  Thrillers: 'Thriller',
};

export const reviewsRating: Record<string, number[]> = {
    Bad: [0, 1, 2, 3],
    Normal: [3, 4, 5],
    Good: [5, 6, 7],
    'Very good': [8, 9, 10],
    Awesome: [10],
};
