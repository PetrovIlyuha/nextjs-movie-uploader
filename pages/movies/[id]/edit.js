import { Component } from "react";
import MovieCreateForm from "../../../components/movieCreateForm";
import { getMovieById } from "../../../actions/index.js";

class EditMovie extends Component {
  static getInitialProps({ query }) {
    return { query };
  }

  state = {
    movie: {}
  };

  componentDidMount() {
    const { id } = this.props.query;
    getMovieById(id).then(movie => {
      this.setState({ movie });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Edit Movie Details</h1>
        {JSON.stringify(this.state.movie)}
        <MovieCreateForm />
      </div>
    );
  }
}

export default EditMovie;
