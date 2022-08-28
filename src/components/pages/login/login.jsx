/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// rotas precisam ser atualizadas
// import registration from "../registration/registration";
// import home from "../home/home";

import icon from "./assets/favicon.ico";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem-Vindo!</span>

            {/* input para entrada de email e senha */}
            <span className="login-form-title">
              <img src={icon} alt="icon" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            {/* botão */}
            <div className="container-login-form-button">
              <Link to="/home">
                <button className="login-form-button">Entrar</button>
              </Link>
            </div>
            {/* campo para redirecionamento criar conta */}
            <div className="text-center">
              <span className="texto1">Não possui conta?</span>

              <a href="registration" className="texto2">
                Criar Conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
