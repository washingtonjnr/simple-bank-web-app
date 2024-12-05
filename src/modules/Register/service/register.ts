// Services
import { api } from "../../../core/services/api";
import { jwtService } from "../../../core/services/jwt";
// Types
import { RegisterRequest } from "../types/RegisterRequest";
import { RegisterResponse } from "../types/RegisterResponse";

export async function register(params: RegisterRequest): Promise<{ accessToken: string }> {
  const { email, document } = params;

  const { data: existingUsers } = await api.get<RegisterResponse[]>("/users", {
    params: { email, document },
  });

  if (existingUsers && existingUsers.length > 0) {
    throw new Error("Já existe um usuário com o e-mail ou CPF informado.");
  }

  try {
    const { data: newUser } = await api.post<RegisterResponse>("/users", params);

    const accessToken = await jwtService.generateToken(newUser);

    const bankAccountData = {
      userId: newUser["id"],
      name: "Magnum Bank",
      currentBalance: 1000,
      type: "CHECKING",
      transactions: [],
    };

    await api.post("/bankAccounts", bankAccountData);

    return { accessToken };
  } catch (error) {
    throw new Error("Erro ao criar conta.");
  }
}
