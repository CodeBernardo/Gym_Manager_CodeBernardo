import { useForm } from "react-hook-form";
import { Input, Select } from "../inputs";
import { days, reps } from "./workout_options";
import React from "react";


const WorkoutRegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (payload: unknown) => {
    console.log(payload);
  };

  return (
    <form action="" onSubmit={handleSubmit(submit)}>
      <Input
        label={"Exercício"}
        id={"workout"}
        type={"text"}
        {...register("workout")}
      />
      <Select
        label={"Dia da semana"}
        id={"day"}
        options={days}
        {...register("day")}
      ></Select>
      <Select
        label={"Objetivo"}
        id={"goal"}
        options={reps}
        {...register("goal")}
      ></Select>
      <div>
        <button>Cadastrar série</button>
        <div role="button">Cancelar</div>
      </div>
    </form>
  );
};

export { WorkoutRegisterForm };
