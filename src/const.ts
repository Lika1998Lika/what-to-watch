export enum AppRoute {
  Main = '/',
  SignIn = '/sign-in',
  MyList = '/my-list',
  Film = '/film',
  AddReview = '/add-review',
  Player = '/player',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

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

 export const ganriesMap: Record<string, string> = {
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

