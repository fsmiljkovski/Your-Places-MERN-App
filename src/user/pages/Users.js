import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "1",
      name: "Golden Head",
      image:
        "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      places: 3,
    },
    {
      id: "2",
      name: "Golden Mini",
      image:
        "https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/fdecc7f0-42bf-4696-bd4c-73a868e5d1d2/81.jpg",
      places: 5,
    },
    {
      id: "3",
      name: "Golden Mini 2",
      image:
        "https://bangomagz.com/wp-content/uploads/2022/07/Golden-Retriever-Puppy.jpg",
      places: 20,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
