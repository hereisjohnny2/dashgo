import { Checkbox, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { UserItem } from "./UserItem";

export function UsersList() {
  return(
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px="6" color="gray.300" w="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          <Th>Data de Cadastro</Th>
          <Th w="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        <UserItem 
          name="Joao Marcelo"
          email="carvalho.joaomc@gmail.com"
          createdAt="02 de Agosto de 2021"
        />
        <UserItem 
          name="Joao Marcelo"
          email="carvalho.joaomc@gmail.com"
          createdAt="02 de Agosto de 2021"
        />
      </Tbody>
    </Table>
  );
}