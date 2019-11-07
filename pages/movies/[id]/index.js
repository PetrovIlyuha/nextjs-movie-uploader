import { useRouter } from "next/router";
import { getMovieById, deleteMovie } from "../../../actions/index.js";
import Link from "next/link";

const Movie = props => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;

  const handleDelete = id => {
    deleteMovie(id).then(() => {
      // handle later
      router.push("/");
    });
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <div>
          <img src={movie.image} alt="" style={{ width: "300px" }} />
        </div>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <button className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="btn btn-danger btn-lg ml-2"
          href="#"
          role="button"
        >
          Delete Movie
        </button>
        <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
          <button className="btn btn-warning btn-lg ml-2" role="button">
            Edit Details
          </button>
        </Link>
      </div>
      <p className="desc-text">{movie.longDescription}</p>
      <style jsx>
        {`
          .desc-text {
            font-size: 20px;
          }
        `}
      </style>
    </div>
  );
};

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);
  return { movie };
};

export default Movie;
