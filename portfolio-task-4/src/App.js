import React from "react";
import "./style.css"; // Import your CSS files as needed
import {
  Nav,
  Profile,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
} from "./Components"; // Import your components

function App() {
  return (
    <div>
      <Nav />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
