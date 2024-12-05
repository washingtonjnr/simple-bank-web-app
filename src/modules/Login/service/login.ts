// Services
import { api } from "../../../core/services/api";
import { jwtService } from "../../../core/services/jwt";
// Types
import { LoginRequest } from "../types/LoginRequest";
import { LoginResponse } from "../types/LoginResponse";

export async function login(params: LoginRequest): Promise<{ accessToken: string; }> {
  const { data } = await api.get<LoginResponse>("/users", { params });

  if (!data || data.length < 1) {
    throw new Error("E-mail e/ou senha inválidos");
  }

  const user = data[0];

  const accessToken = await jwtService.generateToken(user);

  return { accessToken };
}
