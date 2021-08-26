import { api } from "../../api";
import { useQuery, UseQueryOptions } from "react-query";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

type FetchUsersResponse = {
  totalCount: number,
  users: User[],
}

export async function fetchUsers(page: number): Promise<FetchUsersResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    }
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user: User) => {
   return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    })
   }
  });

  return {
    users,
    totalCount
  };
}

export function useUsers(page: number, options: UseQueryOptions) {
  return useQuery(["users", page], () => fetchUsers(page), {
    staleTime: 1000 * 5, // 5 segundos 
    ...options
  });
}