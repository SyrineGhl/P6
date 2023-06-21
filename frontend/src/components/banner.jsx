import React from "react";

const Banner = (props) => {
  const { imgSrc, imgAlt } = props;

  return (
    <section className="banner">
      <h1>Chez vous, partout et ailleurs</h1>
      <img className="imgBanner" src={imgSrc} alt={imgAlt} width={1220} height={223}/>
    </section>
  );
};
export default Banner;
