import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
// Components
import toast from "react-hot-toast";
// Hooks
// Services
// Utils
// Validations
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../../core/hooks/useAuth";
import { LABEL_ERRORS } from "../../core/utils/labelErrors";
import { isValidCNPJ, isValidCPF } from "../../core/utils/validations";
import { registerService } from "./service/@index";
import { RegisterRequest } from "./types/RegisterRequest";

const schema = z.object({
  name: z.string().trim().nonempty(LABEL_ERRORS.EMPTY).min(2, LABEL_ERRORS.INVALID_NAME),
  email: z.string().nonempty(LABEL_ERRORS.EMPTY).email(LABEL_ERRORS.INVALID_EMAIL),
  password: z.string().nonempty(LABEL_ERRORS.EMPTY).min(8, LABEL_ERRORS.INVALID_PASSWORD),
  document: z
    .string()
    .nonempty(LABEL_ERRORS.EMPTY)
    .refine(value => isValidCPF(value) || isValidCNPJ(value), {
      message: LABEL_ERRORS.INVALID_DOCUMENT,
    }),
});

type FormData = z.infer<typeof schema>;

export function useResgisterController() {
  const {
    control,
    formState: { errors },
    register,
    handleSubmit: hookFormHandleSubmit
  } = useForm<FormData>({
    // Validation is done in zodResolver
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: RegisterRequest) => {
      return registerService.register(data);
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

  return { control, isPending, errors, register, handleSubmit };
}
