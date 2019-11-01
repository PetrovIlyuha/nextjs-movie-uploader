import Reac, { Component } from "react";

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
          <a href="#">
            <img
              className="card-img-top"
              src={movie.image}
              alt=""
              style={{ height: "150px" }}
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{movie.name}</a>
            </h4>
            <p className="card-text">{this.shorten(movie.description, 100)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Rating: {movie.rating}</small>
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
