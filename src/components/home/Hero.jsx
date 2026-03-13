import { Link } from "react-router-dom";
import { theme } from "@/styles/theme";
import { techStack } from "@/data/techStack";
import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{ "--hero-gradient": theme.gradients.accent }}
    >
      <div className="hero__content">
        <p className="hero__eyebrow">
          Looking For A Frontend Developer <br /> With The Mind Of A Software
          Engineer?
        </p>
        <h1 className="hero__title">
            Hey, I&apos;m Jed
        </h1>
        <p className="hero__summary">
        I build modern web applications with React, clean
          visual systems, and an emphasis on usability.
        </p>
        <Link className="hero__button" to="/projects">
          View My Projects
        </Link>
      </div>

      <div className="hero__media" aria-label="Tech stack icons">
        <div className="hero__media-frame hero__stack-grid">
          {techStack.map((tech) => (
            <div className="hero__stack-item" key={tech.name} tabIndex={0} aria-label={tech.name}>
              <img className="hero__stack-icon" src={tech.icon} alt={tech.name} loading="lazy" />
              <span className="hero__stack-label">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
