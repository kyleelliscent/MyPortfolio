// Importing profile picture for the About page
import profilePic from '../assets/profile.jpg';

// Component that displays information about the developer, including a profile picture and a link to view the resume.
export default function About() {
  return (
    <section className="about-page">
      <h2>About Me</h2>
      <div className="about-content">
        {/* Profile image */}
        <img src={profilePic} alt="Profile Photo of Kyle Ellis" className="profile-pic" width="200" />
        
        {/* Bio Section */}
        <div className="bio">
          <h3>Kyle Ellis</h3>
          <p>
            I am a amateur web developer who is striving to learn and grow through my experience here at Centennial College. I enjoy learning new technologies and applying them in practical ways. My goal is to become a proficient app developer someday.
          </p>

          {/* Link to view the resume */}
          <div className="about-actions">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button1">View Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}