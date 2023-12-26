import React from "react";
import Card from "./Card";
import image1 from "../../assets/atoms-VHMvdS720Hc-unsplash.jpg";
import image2 from "../../assets/gemma-stpjHJGqZyw-unsplash.jpg";
import image3 from "../../assets/raul-gonzalez-escobar-ZpIskW1Tuvc-unsplash.jpg";

const Main = () => {
  return (
    <>
      <Card imgSrc={image1} />
      <Card imgSrc={image2} />
      <Card imgSrc={image3} />
    </>
  );
};

export default Main;
