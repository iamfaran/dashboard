import React from "react";
import Card from "./Card";
import image1 from "../../assets/atoms-VHMvdS720Hc-unsplash.jpg";
import image2 from "../../assets/gemma-stpjHJGqZyw-unsplash.jpg";
import image3 from "../../assets/raul-gonzalez-escobar-ZpIskW1Tuvc-unsplash.jpg";

const Main = () => {
  const orders = [
    {
      id: 1,
      title: "MARKETPLACE",
      description:
        "Dive into our Marketplace, where style meets convenience. Shop for shoes that step up your game, home decor that transforms spaces, and kitchenware that sparks joy. Your perfect find awaits!",
      imgSrc: image1,
    },

    {
      id: 2,
      title: "TAKEOUT",
      description:
        "Satisfy your cravings with Takeout! From breakfast bites to global cuisines for lunch or dinner, savor restaurant-quality meals delivered to your doorstep. Flavorful moments start here.",
      imgSrc: image2,
    },

    {
      id: 3,
      title: "GROCERIES",
      description:
        "Explore local goodness in our Grocery Mode. Fresh produce, pantry essentials – all at your fingertips. Support local farms and businesses while curating your kitchen essentials. Nourish your home effortlessly",
      imgSrc: image3,
    },
    {
      id: 3,
      title: "TOYS",
      description:
        "Explore local goodness in our Grocery Mode. Fresh produce, pantry essentials – all at your fingertips. Support local farms and businesses while curating your kitchen essentials. Nourish your home effortlessly",
      imgSrc: image3,
    },
  ];
  return (
    <>
      {orders.map((order) => (
        <Card key={order.id} order={order} />
      ))}
    </>
  );
};

export default Main;
