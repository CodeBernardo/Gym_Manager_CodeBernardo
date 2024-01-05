import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h2>Logar</h2>
      <p>Faça o login para continuar para o Gym Manager</p>
      <LoginForm />
      <p>
        Novo no Gym Manager? <Link to={"/register"}>Criar uma conta</Link>
      </p>
    </div>
  );
};

export { LoginPage };
