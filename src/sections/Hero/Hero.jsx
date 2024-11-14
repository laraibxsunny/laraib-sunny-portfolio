import styles from "./HeroStyles.module.css";
import laraibIMG from "../../assets/Professionalish photo.png";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/Laraib Sunny CV May 2024.pdf";
import sunPP from "../../assets/Sun Icon Circle.png";
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={sunPP}
          alt="Profile Picture of Laraib Sunny"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Laraib
          <br />
          Sunny
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a
            href="https://linkedin.com/in/laraib-sunny-aa82b42a5/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/laraibxsunny" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          An aspiring software developer with a curious mind, fuelled by a
          genuine passion for problem solving and analysis.
        </p>
        <a href={CV} download>
          <button className="hover">RESUME / CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
