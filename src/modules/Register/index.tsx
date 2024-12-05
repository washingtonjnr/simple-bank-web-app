import { Link } from "react-router-dom";
// Controllers
import { useResgisterController } from "./useRegisterController";
// Components
import { Button } from "../../shared/components/Button";
import { Input } from "../../shared/components/Input";

export function Register() {
  const { isPending, errors, register, handleSubmit } =
    useResgisterController();

  return (
    <>
      <header className="gap-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold tracking-[-0.5px]">
          Create an account
        </h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Already have an account??
          </span>

          <Link
            to="/login"
            className="font-medium text-teal-900 tracking-[-0.5px]"
          >
            Login
          </Link>
        </p>
      </header>

      <form className="mt-16 flex flex-col gap-4 px-10" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          type="password"
          placeholder="Password"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button type="submit" className="mt-2" isLoading={isPending}>
          Create Account
        </Button>
      </form>
    </>
  );
}
