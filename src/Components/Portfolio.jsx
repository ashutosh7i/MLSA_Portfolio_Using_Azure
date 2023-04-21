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
import image from "../images/techimg2.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Decentralized-Identity-Platform⚡",
    description:
      "DIP lets you keep your documents safe and accessible on the decentralized web. 🌐 You can encrypt, upload, and download your files with IPFS, Filecoin, and Web3Storage. 🚀 DIP is easy to use and secure. 💻",
    url: "https://github.com/ashutosh7i/Decentralized-Identity-Platform",
  },
  {
    title: "PasswordMan🔐",
    description:
      "Password Man is a PHP bases password Manager🔏 used to generate Highly secure passwords and Store them to local storage in a encrypted form. To decrypt Passwords later we use a user defined key🔑.",
    url: "https://github.com/ashutosh7i/PasswordMan",
  },
  {
    title: "OptiPause-20-20👀",
    description:
      "OptiPause 20/20 is a developer's friend. It reminds you to rest your eyes for 20 seconds every 20 minutes and look at something 20 feet away. This way, you can keep your eyes healthy and happy.",
    url: "https://github.com/ashutosh7i/OptiPause-20-20",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
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
