import styles from "./ProjectStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import webpageIcon from "../../assets/webpageIcon.svg";
import ship from "../../assets/ship-resize.png";
import comingsoon from "../../assets/coming soon 2.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ship}
          link={"https://github.com/laraibxsunny/Asteroid-Shooter"}
          h3="Asteroid Shooter"
          p="Python with Pygame Developed Retro-VideoGame Replica"
        />
        <ProjectCard
          src={webpageIcon}
          link={"https://github.com/laraibxsunny/laraib-sunny-portfolio"}
          h3="Webpage Portfolio"
          p="JavaScript with React Assembled Single-Page Portfolio"
        />
        <ProjectCard
          src={comingsoon}
          h3="...More Coming Soon..."
          p="A C# Game Project?? Maybe, stay tuned!"
        />
      </div>
    </section>
  );
}

export default Projects;
