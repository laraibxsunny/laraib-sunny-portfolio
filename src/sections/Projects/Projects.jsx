import styles from "./ProjectStyles.module.css";
import ship from "../../assets/Asteroid Shooter.png";
import ProjectCard from "../../common/ProjectCard";
import comingsoon from "../../assets/coming soon.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ship}
          link={"https://github.com/laraibxsunny/Asteroid-Shooter"}
          h3="Asteroid Shooter"
          p="Python Retro-VideoGame Replica"
        />
        <ProjectCard src={comingsoon} link={""} h3="More Coming Soon" p="" />
      </div>
    </section>
  );
}

export default Projects;
