import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484005,
      lng: -73.9856531,
    },
    creator: "1",
  },
  {
    id: "2",
    title: "Eiffel Tower",
    description: "Pretty tall if you ask me",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipMVXIU7C3h4NRLgIXA8u9eS1dqgzvTHGBusFkFG=w408-h463-k-no",
    address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
    location: {
      lat: 48.85787,
      lng: 2.294593,
    },
    creator: "2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
