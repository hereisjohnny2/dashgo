import { api } from "../../api";
import { useQuery } from "react-query";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export async function fetchUsers(): Promise<User[]> {
  const { data } = await api.get("users");

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

  return users;
}

export function useUsers() {
  return useQuery("users", fetchUsers, {
    staleTime: 1000 * 5 // 5 segundos 
  });
}