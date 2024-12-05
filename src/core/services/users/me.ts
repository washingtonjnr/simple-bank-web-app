// Services
import { api } from "../api";
// Types
import { UserResponse } from "./@type";
// Utils
import { getUserIdFromToken } from "../../utils/extractJwt";
import { sleep } from "../../utils/sleep";

export async function me() {
  await sleep();

  const userId = await getUserIdFromToken();

  const params = { id: userId };

  try {
    const { data } = await api.get<UserResponse[]>("/users", { params });

    if (data && data.length > 0) {
      return data[0];
    }

    throw new Error("Usuário não encontrado");
  } catch (error) {
    throw new Error("Erro ao buscar usuário");
  }
}
