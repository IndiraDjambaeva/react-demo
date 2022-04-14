import React from "react";
import UserCard from "../../components/UserCard/UserCard";

function Home() {
  const users = [
    {
      name: "John Doe",
      age: "50",
    },
    {
      name: "Masha Doe",
      age: "18",
    },
    {
      name: "Pete Doe",
      age: "20",
    },
    {
      name: "Akyl Doe",
      age: "25",
    },
    {
      name: "John Doe",
      age: "15",
    },
    {
      name: "John Doe",
      age: "15",
    },
  ];

  return (
    <section className="home">
      <div className="container">
        <h1>Home Page</h1>
        <h2>Our users</h2>
        <div className="container">
          {users.map((user, idx) => {
            return <UserCard userName={user.name} userAge={user.age} key={`${idx}-${user.name}`} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
