// Controllers
import { useLoginController } from "./useLoginController";
// Components
import { Button } from "../../shared/components/Button";
import { Input } from "../../shared/components/Input";
import { InputPassword } from "../../shared/components/Input/types/Password";

export function Login() {
  const { isPending, errors, register, handleSubmit } = useLoginController();

  return (
    <>
      <header className="gap-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold tracking-[-0.5px] mb-2">
          Faça login
        </h1>
      </header>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 px-6">
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

        <Button type="submit" className="mt-2" isLoading={isPending}>
          Entrar
        </Button>
      </form>
    </>
  );
}
