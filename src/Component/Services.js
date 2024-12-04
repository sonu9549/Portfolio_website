import React from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build responsive and functional websites using the latest technologies.",
    icon: "🌐", // Use an emoji for simplicity, or replace with an icon from a library like FontAwesome or Material Icons
    link: "/web-development", // Optional link for more details
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Our mobile apps are user-friendly and cross-platform, built with React Native.",
    icon: "📱",
    link: "/mobile-app-development",
  },
  {
    id: 3,
    title: "SEO Optimization",
    description:
      "We help improve your website’s ranking on search engines through effective SEO strategies.",
    icon: "🔍",
    link: "/seo-optimization",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "We create beautiful, intuitive, and user-centric designs for your web and mobile applications.",
    icon: "🎨",
    link: "/ui-ux-design",
  },
  // Add more services as needed
];

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <p>
        We offer a wide range of services to help your business succeed online.
      </p>

      <div className="services-cards">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.link && (
              <a href={service.link} className="service-link">
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
