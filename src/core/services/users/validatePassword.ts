// Services
import { api } from "../api";
// Types
import { UserResponse } from "./@type";
// Utils
import { getUserIdFromToken } from "../../utils/extractJwt";
import { sleep } from "../../utils/sleep";

export async function validatePassword(password: string): Promise<boolean> {
  await sleep();

  const userId = await getUserIdFromToken();

  const params = { id: userId, password };

  try {
    const { data } = await api.get<UserResponse[]>("/users", { params });

    if (data && data.length > 0) {
      return true;
    }

    return false;
  } catch (error) {
    throw new Error("Erro ao buscar usuário");
  }
}
