import React, { useEffect, useState } from "react";

const Banner = (props) => {
  const { imgSrc, imgAlt } = props;

  return (
    <section className="banner">
      <h1>Chez vous, partout et ailleurs</h1>
      <img className="imgBanner" src={imgSrc} alt={imgAlt} />
    </section>
  );
};
export default Banner;
