import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {register, handleSubmit, formState: {errors} } = useForm()

  const submit = () => console.log("funcionei")

  return (
    <div>
  
    </div>
  );
};

export { LoginPage };
