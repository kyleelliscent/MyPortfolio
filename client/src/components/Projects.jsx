// Importing images for the projects
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpg';

// Component that displays a list of projects with their descriptions, roles, outcomes, and images
export default function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>A list of my recent projects</p>
      </div>

      <div className="projects-list">
        {/* Project 1 */}
        <div className="project1">
          <h3>Server Development</h3>
          <p>A Homelab developed for the purpose of hosting various services.</p>
          <p><strong>Role:</strong> System Administrator</p>
          <p><strong>Outcome:</strong>Successfully set up and maintained a homelab environment, providing reliable hosting for various services and applications. Implemented best practices for server management, security, and performance optimization.</p> 
          <img src={project1} alt="Project 1" className="project1-image" width="300" />
        </div>
        {/* Project 2 */}
        <div className="project2">
          <h3>Peer-to-Peer File Syncing Application</h3>
          <p>A decentralized application for syncing files between users without a central server.</p>
          <p><strong>Role:</strong> Developer</p>
          <p><strong>Outcome:</strong> Successfully designed and implemented a peer-to-peer file syncing solution, enabling efficient and secure file sharing between users. Utilized WebRTC for direct communication and implemented a distributed hash table for efficient file lookup.</p>
          <img src={project2} alt="Project 2" className="project2-image" width="300" />
        </div>
        {/* Project 3 */}
        <div className="project3">
          <h3>System Utility Application</h3>
          <p>A utility for managing app placement on specialized dual-screen Android devices.</p>
          <p><strong>Role:</strong> Developer</p>
          <p><strong>Outcome:</strong> Developed a system utility application that allows users to manage app placement on dual-screen Android devices. Implemented features for app organization, screen management, and user customization, enhancing the overall user experience on dual-screen devices.</p>
          <img src={project3} alt="Project 3" className="project3-image" width="300" />
        </div>
      </div>
    </section>
  )
}