// ex1
//import React from "react";
// import UserCard from "../../components/UserCard/UserCard";

// function Home() {
//   const users = [
//     {
//       name: "John Doe",
//       age: "50",
//     },
//     {
//       name: "Masha Doe",
//       age: "18",
//     },
//     {
//       name: "Pete Doe",
//       age: "20",
//     },
//     {
//       name: "Akyl Doe",
//       age: "25",
//     },
//     {
//       name: "John Doe",
//       age: "15",
//     },
//     {
//       name: "John Doe",
//       age: "15",
//     },
//   ];

//   return (
//     <section className="home">
//       <div className="container">
//         <h1>Home Page</h1>
//         <h2>Our users</h2>
//         <div className="container">
//           {users.map((user, idx) => {
//             return <UserCard userName={user.name} userAge={user.age} key={`${idx}-${user.name}`} />;
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;

//ex2
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { init } from "ityped";
import Photo from "../../images/photo.jpg";

import "./home.scss";

function Home() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["Frontend React Developer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__left">
          <h1 className="home__title">Hero Coder</h1>
          <p className="home__subtitle">
            <span ref={animatedTextRef}></span>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            accusamus repellat commodi esse voluptatum ipsum voluptates quas
            animi facilis nobis officiis soluta deserunt, rem mollitia iure,
            blanditiis quia repudiandae omnis.
          </p>
          <ul className="home__links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="home__icon" />
              </a>
            </li>
          </ul>
          <Link to="/contact" className="home__cta">
            Hire Me
          </Link>
        </div>
        <div className="home__right">
          <img src={Photo} alt="Hero Coder" />
        </div>
      </div>
    </section>
  );
}

export default Home;
