// Used to store movies returned from the server
export const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
export const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

const initialMovieDetailsState = [
  {
    id: "",
    title: "",
    poster: "",
    description: "",
    genres: [],
  },
];
// used to store individual movie details from the server
export const movieDetails = (state = initialMovieDetailsState, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    case "CLEAR_DETAILS":
      return initialMovieDetailsState;
    default:
      return state;
  }
};
