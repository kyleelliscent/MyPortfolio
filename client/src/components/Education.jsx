// Component to display education and experience information
export default function Education() {
  return (
    <section className="education-page">
      <div className="education-header">
        <h2>Education & Qualifications</h2>
        <p>A list of my educational background</p>
      </div>

      {/* Academic credentials */}
      <div className="education-list">
        <div className="education1">
          <h3>Durham College</h3>
          <h4>Certificate in Electrical Engineering</h4>
          <p>Completed 2022</p>
        </div>
        <div className="education2">
          <h3>Centennial College</h3>
          <h4>Diploma in Software Engineering Technologies</h4>
          <p>In-Progress</p>
        </div>
      </div>

      {/* Professional experience */}
      <div className="experience-list">
        <div className="experience1">
          <h3>Software Developer</h3>
          <p>Developed and maintained software applications for various clients.</p>
          <p>2022 - Present</p>
        </div>
        <div className="experience2">
          <h3>System Administrator</h3>
          <p>Managed and maintained IT infrastructure for a small business.</p>
          <p>2025 - Present</p>
        </div>
      </div>
    </section>
  )
}