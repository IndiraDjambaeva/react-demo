// import './app.scss';

// function App() {
//   return (
//     <div className="app">
//       <h1>Hello React</h1>
//       <h2>Hello again</h2>

//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*d" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
