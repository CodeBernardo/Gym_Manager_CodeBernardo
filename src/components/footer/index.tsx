import { FaGitSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <>
      <footer>
        <p>Todos os direitos reservados por Bernardo stein </p>
        <FaGitSquare />{" "}
        <Link to="https://github.com/CodeBernardo">CodeBernardo</Link>
      </footer>
    </>
  );
};

export { AppFooter }