export const MOVIE_DATA = [
  {
    id: "1",
    name: "The Shawshank Redemption",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    longDescription:
      'The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis "Red" Redding (Morgan Freeman), and becomes instrumental in a money-laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.',
    rating: 3.9,
    genre: "drama, crime",
    image: "https://image.tmdb.org/t/p/w1280/ypHmAPjlLNMke2Sj4zsm0dDAecC.jpg"
  },
  {
    id: "2",
    name: "The Dark Knight",
    releaseYear: 2008,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    longDescription:
      "The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman. In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchistic mastermind known as the Joker (Ledger), who seeks to undermine Batman's influence and turn the city to chaos. ",
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
    longDescription:
      "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.The title of the novel refers to the story's main antagonist, the Dark Lord Sauron,who had in an earlier age created the One Ring to rule the other Rings of Power as the ultimate weapon in his campaign to conquer and rule all of Middle-earth.",
    rating: 4.5,
    genre: "adventure, drama, fantasy",
    image:
      "https://www.tomswallpapers.com/pic/201609/1024x768/tomswallpapers.com-55030.jpg"
  },
  {
    id: "4",
    name: "Breaking Bad",
    releaseYear: 2009,
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    longDescription:
      'Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show originally aired on AMC for five seasons, from January 20, 2008, to September 29, 2013. Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White (Bryan Cranston), a struggling and depressed high school chemistry teacher who is diagnosed with stage-3 lung cancer. Together with his former student Jesse Pinkman (Aaron Paul), White turns to a life of crime by producing and selling crystallized methamphetamine to secure his family\'s financial future before he dies, while navigating the dangers of the criminal underworld. The title comes from the Southern colloquialism "breaking bad" which means to "raise hell" or turn to a life of crime. Gilligan characterized the series as showing Walter\'s transformation from a soft-spoken Mr. Chips into Scarface.',
    rating: 4.9,
    genre: "crime, drama",
    image: "https://miro.medium.com/max/3840/1*Jh772SA8erMpe64mmQrE5Q.jpeg"
  },
  {
    id: "5",
    name: "True Detective",
    releaseYear: 2014,
    description:
      'Looking for something to watch? Check out "True Detective." Season 3 is betting on an Oscar winner and a disturbing mystery to recapture the success of its first installment.',
    longDescription:
      "True Detective is an American anthology crime drama television series created and written by Nic Pizzolatto. The series, broadcast by the premium cable network HBO in the United States, premiered on January 12, 2014. Each season of the series is structured as a self-contained narrative, employing new cast ensembles, and following various sets of characters and settings.The first season, starring Matthew McConaughey, Woody Harrelson, Michelle Monaghan, Michael Potts, and Tory Kittles, takes place in Louisiana and follows a pair of Louisiana State Police homicide detectives, and their pursuit of a serial killer over a 17-year period.",
    rating: 4.2,
    genre: "crime, drama",
    image:
      "https://www.hbo.com/content/dam/hbodata/series/true-detective/key_art/true-detective-s3-ka-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg"
  }
];

const CATEGORY_DATA = [
  { id: "c-1", name: "drama" },
  { id: "c-2", name: "action" },
  { id: "c-3", name: "adventure" },
  { id: "c-4", name: "crime" },
  { id: "c-5", name: "fantasy" }
];
// TODO: getCategories function
// TODO: get categories in index page
// TODO: provide categories to sidemenu
// TODO: in sidemenu iterate categories and display menu

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      reject("Something went Wrong...we are working on it...");
    }, 200);
  });
};
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
