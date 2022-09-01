import React from "react";
import "./Banner.css";
import IMG_BANNER from "../../img/IMG_BANNER.png";

const HeroBanner = () => {
  return (
    <>
      <div className="hero-banner-container">
        <div>
          <p className="vest">Nova coleção</p>
          <h3>Blusa feminina crochê</h3>
          <h1>LISTRADA BEGE</h1>
          <img src={IMG_BANNER} alt="" className="hero-banner-image" />
          <div>
           {/*  <a href="/"> */}
              <button type="button" className="btn-banner">COMPRAR</button>
           {/*  </a> */}
            <div className="desc">
              <h5>Descrição</h5>
              <p>
                Com uma vibe super tendência, a Blusa feminina crochê listrada
                bege é ideal para ocasiões casuais como happy hours com as
                amigas! Confeccionada em crochê, a peça é versátil e cria
                visuais incríveis para diferentes ocasiões!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="products-heading">
        <h2>NOVIDADES</h2>
      </div>
    </>
  );
};

export default HeroBanner;
