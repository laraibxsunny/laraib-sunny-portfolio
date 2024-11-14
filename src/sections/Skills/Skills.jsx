import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="JavaScipt" />
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Gaming(valorant radiant)" />
        <SkillList
          src={checkMarkIcon}
          skill="Fighting(got abused by the Hamza)"
        />
        <SkillList
          src={checkMarkIcon}
          skill="Happy Relationship(she forced me to write this)"
        />
        <SkillList
          src={checkMarkIcon}
          skill="Bowling(came 3rd in a tournament once with the highest hcp)"
        />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
