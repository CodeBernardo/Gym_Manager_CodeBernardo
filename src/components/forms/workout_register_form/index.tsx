import { useForm } from "react-hook-form";

const WorkoutRegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (payload: unknown) => {
    console.log(payload)
  }

  return (
    <form action="">
      
    </form>
  )
};
