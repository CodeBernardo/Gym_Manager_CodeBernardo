import { LoginForm } from "../../components/forms";

const LoginPage = () => {
  return (
    <div>
      <h2>Logar</h2>
      <p>Faça o login para continuar para o Gym Manager</p>
      <LoginForm />
      <p>
        Novo no Gym Manager? <span>Criar uma conta</span>
      </p>
    </div>
  );
};

export { LoginPage }