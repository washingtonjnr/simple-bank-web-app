

import { useQuery } from "@tanstack/react-query";
// Service
import { usersService } from "../services/users/@index";

export function useUser(signedIn: boolean) {
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  return {
    user: data,
    isLoading: isFetching,
    isSuccess: isSuccess,
  }
}
