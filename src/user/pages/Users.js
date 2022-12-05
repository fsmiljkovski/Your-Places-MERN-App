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
  ];
  return <UsersList items={USERS} />;
};

export default Users;
