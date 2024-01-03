import { useForm } from "react-hook-form";
import { Input, Select, SelectOpt } from "../inputs";

const RegisterForm = () => {
  
  const options: SelectOpt[] = [
    { value: "admin", label: "Administrador" },
    { value: "coach", label: "Professor" },
    { value: "user", label: "Aluno" },
  ];

  const { register, handleSubmit } = useForm();

  const submit = (payload: unknown) => {
    console.log(payload);
  };

  return (
    <form action="" onSubmit={handleSubmit(submit)}>
      <Input
        label={"Nome"}
        id={"name"}
        type={"text"}
        placeholder={"Digite seu nome completo"}
        {...register("name")}
      />
      <Input
        label={"Email"}
        id={"email"}
        type={"email"}
        placeholder={"Digite seu melhor email"}
        {...register("email")}
      />
      <Select
        label={"Categoria de cadastro"}
        id={"role"}
        options={options}
        {...register("role")}
      ></Select>
      <Input
        label={"Senha"}
        id={"password"}
        type={"password"}
        placeholder={"Digite sua senha"}
        {...register("password")}
      />
      <Input
        label={"Confirmação de senha"}
        id={"password_check"}
        type={"password"}
        placeholder={"Digite sua senha novamente"}
        {...register("password_check")}
      />
      <div>
        <button>Registrar</button>
        <div role="button">Voltar</div>
      </div>
    </form>
  );
};

export { RegisterForm };
