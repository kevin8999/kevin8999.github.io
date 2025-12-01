import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

function ProjectCard({ title, description, link }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className={styles.cardLink} to={link}>
        View →
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Kevin Duong"
      description="Aspiring Backend Software Engineer"
    >
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Kevin Duong</h1>
          <p className={styles.subtitle}>
            <div>Aspiring Backend Software Engineer</div>
            <div>Computer Science at University of Florida</div>
          </p>

          <div className={styles.ctaRow}>
            <Link className="button button--primary" to="https://github.com/kevin8999/">
              View Projects
            </Link>
            <Link className="button button--secondary" to="/docs/welcome">
              View Notes
            </Link>
          </div>
        </section>

        {/* Spotlight Section */}
        <section className={styles.spotlight}>
          <h2>Projects</h2>

          <div className={styles.cardGrid}>
            <ProjectCard
              title="GatorAID"
              description="AI-powered physical therapist that tracks exercises."
              link="https://github.com/Kraga922/GatorAID"
            />

            <ProjectCard
              title="Panelverse"
              description="A comics publishing platform with secure uploads, user accounts, and a clean fast reader UI."
              link="https://github.com/kevin8999/panelverse"
            />

            <ProjectCard
              title="SolSearch"
              description="A geospatial tool that identifies the best places to build solar panels."
              link="https://github.com/Nedas-Jaronis/SolSearch"
            />

            <ProjectCard
              title="TERMINALCASINO"
              description="Play casino games through the terminal!"
              link="https://github.com/ufosc/TERMINALCASINO"
            />
          </div>
        </section>

        {/* Now Section */}
        <section className={styles.nowSection}>
          <h2>What I'm Doing Now</h2>
          <ul>
            <li>Working through Full Stack Open to sharpen full-stack skills.</li>
            <li>Preparing for fullstack and backend software engineering internships.</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
