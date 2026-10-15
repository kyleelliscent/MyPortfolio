// Import Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

// Component for the Home page that welcomes users and provides navigation links to the About and Projects pages.
export default function Home() {
  return (
    <section className="home-page">
      {/* Welcome message section */}
      <div className="welcome-message">
        <h1>Welcome to My Portfolio</h1>
        
        <p className="mission-statement">
          <strong>Mission:</strong> To learn how to create web applications using React, Node.js, and other technologies.
        </p>
      </div>
    
    {/* Navigation links to About and Projects pages */}
    <div className="redirects">
      <Link to="/about" className="button1">
        Learn More About Me
      </Link>
      <Link to="/projects" className="button2">
        View My Work
      </Link>
    </div>
    </section>
  );
}