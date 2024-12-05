import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
// Components
import toast from "react-hot-toast";
// Hooks
import { useAuth } from "../../core/hooks/useAuth";
// Services
import { authService } from "./service/@index";
// Utils
import { LABEL_ERRORS } from "../../core/utils/labelErrors";
// Types
import { LoginRequest } from "./types/LoginRequest";
// Validations
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().nonempty(LABEL_ERRORS.EMPTY).email(LABEL_ERRORS.INVALID_EMAIL),
  password: z.string().nonempty(LABEL_ERRORS.EMPTY).min(8, LABEL_ERRORS.INVALID_PASSWORD),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    formState: { errors },
    register,
    handleSubmit: hookFormHandleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      email: "johndoe@example.com",
      password: "password123"
    },
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginRequest) => {
      return authService.login(data);
    }
  });

  const { updateSignedIn } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      updateSignedIn(accessToken);
    } catch (error) {
      toast.error(error instanceof Error ? error.message: "Erro ao fazer login");
    }
  });

  return { isPending, errors, register, handleSubmit };
};
