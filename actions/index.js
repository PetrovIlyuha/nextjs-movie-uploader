export const MOVIE_DATA = [
  {
    id: "1",
    name: "The Shawshank Redemption",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    rating: 3.9,
    genre: "drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg"
  },
  {
    id: "2",
    name: "The Dark Knight",
    releaseYear: 2008,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    rating: 4,
    genre: "action, crime, drama",
    image:
      "https://cdn3.movieweb.com/i/article/MDBokXUxOlvIIVBrPF2PenwAFlajFG/798:50/Dark-Knight-Movie-10th-Anniversary-Theatrical-Rerelease.jpg"
  },
  {
    id: "3",
    name: "Lord of the Rings",
    releaseYear: 2004,
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    rating: 4.5,
    genre: "adventure, drama, fantasy",
    image:
      "https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600"
  },
  {
    id: "4",
    name: "Breaking Bad",
    releaseYear: 2009,
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    rating: 4.9,
    genre: "adventure, criminal, drama",
    image: "https://miro.medium.com/max/3840/1*Jh772SA8erMpe64mmQrE5Q.jpeg"
  },
  {
    id: "5",
    name: "True Detective",
    releaseYear: 2014,
    description:
      'Looking for something to watch? Check out "True Detective." Season 3 is betting on an Oscar winner and a disturbing mystery to recapture the success of its first installment.',
    rating: 4.2,
    genre: "detective, criminal, drama",
    image:
      "https://www.hbo.com/content/dam/hbodata/series/true-detective/key_art/true-detective-s3-ka-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg"
  }
];

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIE_DATA);
      reject("Server not responding...");
    }, 400);
  });
};

export const getMovieById = id => {
  return new Promise((resolve, reject) => {
    const movieIndex = MOVIE_DATA.findIndex(m => m.id === id);
    const movie = MOVIE_DATA[movieIndex];
    setTimeout(() => resolve(movie), 50);
  });
};
