import { localStorageKeys } from "../config/localStorageKeys";
import { jwtService } from "../services/jwt";


export async function getUserIdFromToken(): Promise<string> {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if (!accessToken) {
    throw new Error("No access token found");
  }

  const decoded = await jwtService.decodeToken(accessToken);
  const userId = decoded["id"];

  if (!userId) {
    throw new Error("Usuário inválido");
  }

  return userId as string;
}
