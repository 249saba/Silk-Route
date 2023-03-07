import React from "react";
import {
  Final_black,
  AI_globe_europe,
  AI_World,
  Image_ai,
  Arrowright,
  Arrowleft,
  cross
} from "../../assets";
import Nav from "../Nav";
import "./Carousel.scss";
function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
       <p className="immigrationpara">Immigration Tailored to You</p>
          <img src={Final_black} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <Nav />
          </div>
        </div>
        <div class="carousel-item ">
          <div className="scarypara">Immigrating is a  <img className="cross" src={cross}/><p className="scary">scary </p>
<span>luxury</span><p className="experience">experience</p> </div>
          <img src={AI_globe_europe} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <Nav />
          </div>
        </div>
        <div class="carousel-item ">
          <div className="ai-world-container">We specialize in new beginnings</div>
          <img src={AI_World} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <Nav />
          </div>
        </div>
        <div class="carousel-item ">
          <div className="Image_ai-container">A Red Carpet Experience for Anyone Seeking 
<p>Residence in Europe</p></div>
          <img src={Image_ai} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <Nav />
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
       
        <span class="carousel-control-prev-icon" aria-hidden="true">
          <img src={Arrowleft} />
        </span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true">
          <img src={Arrowright} />
        </span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
