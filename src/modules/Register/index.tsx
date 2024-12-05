import { Link } from "react-router-dom";
// Controllers
import { useResgisterController } from "./useRegisterController";
// Components
import { Controller } from "react-hook-form";
import { Button } from "../../shared/components/Button";
import { Input } from "../../shared/components/Input";
import InputDocument from "../../shared/components/Input/types/Document";
import { InputPassword } from "../../shared/components/Input/types/Password";

export function Register() {
  const { control, isPending, errors, register, handleSubmit } =
    useResgisterController();

  return (
    <>
      <header className="gap-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold tracking-[-0.5px]">Crie sua conta</h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Já possui uma conta?
          </span>

          <Link
            to="/login"
            className="font-medium text-red-500 tracking-[-0.5px]"
          >
            Faça login
          </Link>
        </p>
      </header>

      <form className="mt-16 flex flex-col gap-4 px-10" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />

        <InputPassword
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
        />

        <Controller
          control={control}
          name="document"
          render={({ field: { value, onChange } }) => (
            <InputDocument
              value={value}
              onChange={onChange}
              placeholder="CPF ou CNPJ"
              error={errors.document?.message}
            />
          )}
        />

        <Button type="submit" className="mt-2" isLoading={isPending}>
          Criar conta
        </Button>
      </form>
    </>
  );
}
