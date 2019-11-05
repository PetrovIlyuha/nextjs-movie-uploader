import React, { useState } from "react";
import Modal from "./Modal";
import MovieCreateForm from "./movieCreateForm";

const Sidemenu = props => {
  const { categories } = props;
  return (
    <div>
      <Modal>
        <MovieCreateForm />
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
