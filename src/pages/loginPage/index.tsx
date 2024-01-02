import { useForm } from "react-hook-form";
import { Input } from "../../components";

const LoginPage = () => {
  const {register, handleSubmit, formState: {errors} } = useForm()

  const submit = () => console.log("funcionei")

  return (
    <div>
      <header>
        <h1>Bem Vindo ao Gym Manager</h1>
      </header>
      <main>
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit(submit)}>
          <Input
            label={"Nome"}
            id={"name"}
            type={"text"}
            placeholder={"Digite seu nome"}
            {...register("name")}
          />
          <Input
            label={"Email"}
            id={"email"}
            type={"email"}
            placeholder={"Digite seu nome"}
            {...register("name")}
          />
          <Input
            label={"Nome"}
            id={"name"}
            type={"text"}
            placeholder={"Digite seu nome"}
            {...register("name")}
          />
          <Input
            label={"Nome"}
            id={"name"}
            type={"text"}
            placeholder={"Digite seu nome"}
            {...register("name")}
          />

        </form>
      </main>
    </div>
  );
};

export { LoginPage };
