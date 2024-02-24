import styles from "./Login.module.css";

import funkoLogo from "../assets/funkoLogo.png";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <header className={styles.header}>
        <img src={funkoLogo} alt="Logo funkos" />
      </header>
      <section className={styles.section__login}>
        <button type="submit">Login</button>
        <div className={styles.section__loginText}>
          <p>don't have an account?</p>
          <p> Sing up</p>
        </div>
      </section>
    </>
  );
}
