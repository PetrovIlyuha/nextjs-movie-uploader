import React, { Component } from "react";
import Rating from "react-rating";
import Link from "next/link";

class MovieList extends Component {
  shorten = (text, maxLength) => {
    if (text && text.length > 200) {
      return text.substr(0, 140) + "...";
    }
    return text;
  };
  renderMovies(movies) {
    return movies.map(movie => (
      <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
        <div className="card h-100">
          <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
            <a>
              <img
                className="card-img-top"
                src={movie.image}
                alt=""
                style={{ height: "150px" }}
              />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a>{movie.name}</a>
              </Link>
            </h4>
            <div>
              <strong>{movie.genre}</strong>
            </div>
            <hr />
            <p className="card-text">{this.shorten(movie.description, 100)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <div>Rating</div>
              <Rating initialRating={movie.rating} readonly />
            </small>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const { movies } = this.props;
    return <React.Fragment>{this.renderMovies(movies)}</React.Fragment>;
  }
}
export default MovieList;
