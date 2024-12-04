import React from "react";
import "./About.css";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Mukesh Bairwa",
    role: "CEO",
    imageUrl: "../../public/images/tech.webp",
    description:
      "Mr. Mukesh Bairwa is the CEO and Managing Director of our company.",
  },
  {
    id: 2,
    name: "Mr. Sonu Kumar Bairwa",
    role: "Software Developer",
    imageUrl: "public/images/tech.webp",
    description:
      "Mr. Sonu is the head of development, leading our team of engineers.",
  },
  {
    id: 3,
    name: "Mr. Lokesh Kumar ",
    role: "Design Lead",
    imageUrl: "../../public/images/tech.webp",
    description:
      "Mr. Lokesh is responsible for the Frontend and UI/UX design, ensuring a great user experience.",
  },
];

function About() {
  return (
    <section id="about-us" className="about-us">
      <div className="hero">
        <div className="about">
          <h2>About Us</h2>
          <p>
            We are a dynamic team committed to delivering high-quality services
            and solutions to our clients. We are a dynamic team committed to
            delivering high-quality services and solutions to our clients. We
            are a dynamic team committed to delivering high-quality services and
            solutions to our clients. We are a dynamic team committed to
            delivering high-quality services and solutions to our clients. We
            are a dynamic team committed to delivering high-quality services and
            solutions to our clients.
          </p>
        </div>
        <div className="img">
          <h2>Company History</h2>
          <p>
            Our company was founded in 2020 and has been providing reliable
            services since then.
          </p>
        </div>
      </div>

      <div className="company-history">
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide innovative and reliable solutions that
          empower businesses to thrive in a digital world. We aim to build
          lasting relationships with our clients through dedication, creativity,
          and exceptional service.
        </p>
      </div>

      <div className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="team-member-image"
              />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
