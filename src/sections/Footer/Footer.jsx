import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Laraib Sunny.
        <br />
        All rights reserved.
        <br />
        Some Icons by &nbsp;
        <a href="https://icons8.com/" target="_blank">
        Icons8
        </a>
        .
      </p>
    </section>
  );
}

export default Footer;
