import { useForm } from "react-hook-form";
import { Input, Select, SelectOpt } from "../inputs";
import React from "react";


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
      <Input
        label={"Peso"}
        id={"wheigt"}
        type={"number"}
        placeholder={"Digite seu peso"}
        {...register("wheigt")}
      />
      <Input
        label={"Altura"}
        id={"height"}
        type={"number"}
        placeholder={"Digite sua altura"}
        {...register("height")}
      />
      <Input
        label={"Meta"}
        id={"goal"}
        type={"number"}
        placeholder={"Digite sua meta de peso"}
        {...register("goal")}
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
