import { Checkbox, Table, Tbody, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { UserItem } from "./UserItem";

interface UsersListProps {
  users: Array<{
    id: number,
    name: string,
    email: string,
    createdAt: string,
  }> | undefined
}

export function UsersList({ users }: UsersListProps) {
    
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  }); 
  

  return(
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px={["4", "4", "6"]} color="gray.300" w="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          { isWideVersion && <Th>Data de Cadastro</Th> }
          <Th w="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          users?.map(user => {
            return(
              <UserItem 
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                createdAt={user.createdAt}
              />
            )
          })
        }
      </Tbody>
    </Table>
  );
}