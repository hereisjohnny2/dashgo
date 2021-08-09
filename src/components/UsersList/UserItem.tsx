import { Box, Checkbox, Link, Td, Text, Tr, useBreakpointValue } from "@chakra-ui/react";
import { api } from "../../services/api";
import { fetchUsers } from "../../services/hooks/users/useUsers";
import { queryClient } from "../../services/queryClient";
import { EditUserButton } from "./EditUserButon";

interface UserItemProps {
  id: number,
  name: string;
  email: string;
  createdAt: string;
}

export function UserItem({ id, name, email, createdAt }: UserItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(id: number) {
    await queryClient.prefetchQuery(["user", id], async () => {
      const response = await api.get(`users/${id}`);
      return response.data;
    }, {
      staleTime: 1000 * 60 * 10, // 10 minutos
    });
  }

  return(
    <Tr>
      <Td px={["4", "4", "6"]}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(id)}>
            <Text fontWeight="bold">{name}</Text>
          </Link>
          <Text fontSize="sm" color="gray.300">{email}</Text>
        </Box>
      </Td>
      {isWideVersion && <Td>{createdAt}</Td>}
      <Td>
        {isWideVersion && <EditUserButton />}
      </Td>
    </Tr>
  );
}