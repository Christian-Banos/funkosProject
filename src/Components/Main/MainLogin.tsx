import "./MainLogin.css";
import funkoLogo from "../../assets/funkoLogo.png";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <header className="header">
        <img src={funkoLogo} alt="Logo funkos" />
      </header>
      <section className="section__login">
        <button type="submit">Login</button>
        <div className="section__login--text">
          <p>don't have an account?</p>
          <p> Sing up</p>
        </div>
      </section>
    </>
  );
}
