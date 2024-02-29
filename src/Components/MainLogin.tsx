import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import funkoLogo from "../assets/funkoLogo.png";
import users from "../../src/data/users";

interface Props {
  isAuthenticated?: boolean;
  onAuthenticate?: (
    username: string,
    password: string,
    isLogin: boolean
  ) => void;
}

interface User {
  id: number;
  name: string;
  password: string;
  email: string;
}

const MainLogin: React.FC<Props> = ({ isAuthenticated, onAuthenticate }) => {
  const [userForm, setUserForm] = useState({
    userName: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const catchInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentUserName = userForm?.userName;

    const loggedUser = users?.find((element) => {
      const currentUserAuthentication = element.name === currentUserName;
      if (currentUserAuthentication) {
        return true;
      } else {
        return false;
      }
    });

    console.log("loggedUser", loggedUser);

    if (loggedUser) {
      navigate("/");
      return null;
    }
  };

  return (
    <>
      <header className={styles.header}>
        <img src={funkoLogo} alt="Logo funkos" />
      </header>

      {/* Form */}
      <section className={styles.section__login}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            value={userForm.userName}
            onChange={catchInputValue}
            placeholder="User Name" /* captura el evento que se pone dentro del formulario */
          />
          <input
            type="password"
            name="password"
            value={userForm.password}
            onChange={catchInputValue}
            placeholder="Password"
          />
          <button type="submit" onClick={() => setIsLogin(!isLogin)}>
            Login
          </button>
        </form>

        {error && <p className={styles.error}>All fields are required</p>}
      </section>
      <div className={styles.section__loginText}>
        <p>{isLogin ? "Don't have an account?" : "Already have an account"}</p>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign up" : "Login"}
        </p>
      </div>
    </>
  );
};
export default MainLogin;
