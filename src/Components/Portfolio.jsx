/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/imagen3.jpg";

const imageAltText = "Construction & others";
/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Automated Testing Framework for Web Applications",
    description:
      "Developing a comprehensive testing framework using Selenium and Jest for efficient testing of web applications.",
    url: "https://github.com/erikssonherlo/automated-testing-framework",
  },
  {
    title: "Blockchain-based Supply Chain Management System",
    description:
      "Creating a decentralized supply chain management system using blockchain technology to enhance transparency and traceability.",
    url: "https://github.com/erikssonherlo/blockchain-supply-chain",
  },
  {
    title: "AI-Powered Chatbot for Student Support",
    description:
      "Building an intelligent chatbot using natural language processing and machine learning to provide support and information to university students.",
    url: "https://github.com/erikssonherlo/ai-student-chatbot",
  },
  {
    title: "Secure File Storage System with End-to-End Encryption",
    description:
      "Designing a secure file storage system with end-to-end encryption to protect sensitive data from unauthorized access.",
    url: "https://github.com/erikssonherlo/secure-file-storage",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
