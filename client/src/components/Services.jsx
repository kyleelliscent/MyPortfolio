// Importing images for the services
import Service1 from '../assets/service1.png';
import Service2 from '../assets/service2.png';
import Service3 from '../assets/service3.png';

// Component that displays a list of services offered
export default function Services() {
  return (
    <section className="services-page">
      <div className="services-header">
        <h2>My Services</h2>
        <p>A list of services I offer</p>
      </div>

      <div className="services-list">
        {/* Service 1 */}
        <div className="service1">
          <h3>Web Development</h3>
          <p>Custom website development using modern technologies.</p>
          <img src={Service1} alt="Service 1" className="service1-image" width="300" />
        </div>
        {/* Service 2 */}
        <div className="service2">
          <h3>Mobile App Development</h3>
          <p>Building cross-platform mobile applications for iOS and Android.</p>
          <img src={Service2} alt="Service 2" className="service2-image" width="300" />
        </div>
        {/* Service 3 */}
        <div className="service3">
          <h3>UI/UX Design</h3>
          <p>Designing user-friendly interfaces and experiences.</p>
          <img src={Service3} alt="Service 3" className="service3-image" width="300" />
        </div>
      </div>
    </section>
  );
}