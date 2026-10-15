import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Component for creating a contact form that allows users to submit their contact information and a message. Upon submission, the form data is logged to the console, and the user is redirected to the home page with a thank you alert.
export default function Contact() {
  // Navigation hook to redirect the user after form submission
  const navigate = useNavigate();

  // State hook for holding form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  // Updates form state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handles form submission, logs the data, shows an alert, and navigates to the home page
  const handleSubmit = (e) => {
    e.preventDefault();

    // Logs the form data
    console.log('Contact form submitted:', formData);

    // Displays a thank you alert to the user
    alert(`Thank you, ${formData.firstName}! Your message has been received.`);

    // Redirects the user to the home page
    navigate('/');
  };

  return (
    <section className="contact-page">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me using the form below.</p>
      </div>

      <div className="contact-container">
        {/* Contact information section */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>You can reach me by:</p>
          <ul className="info-list">
            <li><strong>Email:</strong> kellis28@my.centennialcollege.ca</li>
            <li><strong>Phone:</strong> 905-928-2418</li>
            <li><strong>Estimated Response Time:</strong> 1-2 business days</li>
          </ul>
        </div>

        {/* Contact form section */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />  
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number: </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message: </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="button1">Submit</button>
        </form>
      </div>
    </section>
  );
}