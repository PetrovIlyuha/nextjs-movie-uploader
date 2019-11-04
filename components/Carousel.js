import React from "react";

const Carousel = props => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide my-4"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            className="d-block img-fluid"
            src="https://cdn3.movieweb.com/i/article/byipgN4A5ioXULCE54aj65Zy7JTfzw/798:50/Shawshank-Redemption-Movie-Facts-Trivia.jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block img-fluid"
            src="https://cdn3.movieweb.com/i/article/MDBokXUxOlvIIVBrPF2PenwAFlajFG/798:50/Dark-Knight-Movie-10th-Anniversary-Theatrical-Rerelease.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block img-fluid"
            src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/01/Breaking-Bad-Movie-Characters.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
