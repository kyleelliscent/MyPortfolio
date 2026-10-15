// Importing routing components from react-router-dom for navigation
import { Routes, Route } from "react-router-dom";

// Importing the main components of the application
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Services from "./components/Services";

// Importing the stylesheet for the application
import "./App.css";

// Main application component that sets up the routing and layout of the portfolio
function App() {
  return (
    <>
      {/* Navigation bar component that appears on all pages */}
      <Navbar />

      {/* Main content area where different pages are rendered */}
      <main className="container">
        <Routes>
          {/* Defining routes for different pages of the portfolio */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          
          {/* fallback route that redirects to the Home page for any undefined paths */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;