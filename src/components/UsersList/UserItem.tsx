import { Box, Checkbox, Td, Text, Tr, useBreakpointValue } from "@chakra-ui/react";
import { EditUserButton } from "./EditUserButon";

interface UserItemProps {
  name: string;
  email: string;
  createdAt: string;
}

export function UserItem({ name, email, createdAt }: UserItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return(
    <Tr>
      <Td px={["4", "4", "6"]}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{name}</Text>
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