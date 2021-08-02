import { Box, Checkbox, Td, Text, Tr } from "@chakra-ui/react";
import { EditUserButton } from "./EditUserButon";

interface UserItemProps {
  name: string;
  email: string;
  createdAt: string;
}

export function UserItem({ name, email, createdAt }: UserItemProps) {
  return(
    <Tr>
      <Td px="6">
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.300">{email}</Text>
        </Box>
      </Td>
      <Td>{createdAt}</Td>
      <Td>
        <EditUserButton />
      </Td>
    </Tr>
  );
}