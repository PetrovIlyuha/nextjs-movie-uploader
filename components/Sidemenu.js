import { useRouter } from "next/router";
import Modal from "./Modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions";

const Sidemenu = props => {
  const { categories } = props;
  const router = useRouter();
  let modal = null;
  const handleCreateMovie = movie => {
    createMovie(movie).then(movies => {
      modal.closeModal();
      router.push("/");
    });
  };

  return (
    <div>
      <Modal ref={elem => (modal = elem)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">Ripe Bananas</h1>
      <div className="list-group">
        {categories.map(category => {
          return (
            <a key={category.id} href="#" className="list-group-item bg-dark">
              {category.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidemenu;
