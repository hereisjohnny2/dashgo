import { Checkbox, Table, Tbody, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { UserItem } from "./UserItem";
import { useQuery } from 'react-query';

export function UsersList() {
  
  
    
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