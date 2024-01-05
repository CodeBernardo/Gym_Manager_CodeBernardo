import { useForm } from "react-hook-form";
import { Input } from "../inputs";
import React from "react";


const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (payload: unknown) => {
    console.log(payload)
  }

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
        label={"Senha"}
        id={"password"}
        type={"password"}
        placeholder={"Digite sua senha"}
        {...register("password")}
      />
      <div>
        <button>Entrar</button>
        <div role="button">Voltar</div>
      </div>
    </form>
  );
};

export { LoginForm }
