import { Button, Flex, Icon, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { MainSection } from "../../components/MainSection";
import { Pagination } from "../../components/Pagination";
import { SectionHeading } from "../../components/SectionHeading";
import { UsersList } from "../../components/UsersList";
import { useQuery } from "react-query";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export default function Users() {
  const { data, isLoading, error } = useQuery("users", async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

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
  });
  
  return (
    <MainSection>
      <Flex mb="8" justify="space-between" align="center">
        <SectionHeading title="Usuários"/>
        <Link href="/users/create" passHref>
          <Button 
            as="a" 
            size="sm"  
            fontSize="small" 
            colorScheme="pink" 
            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
          >
            Criar Usuário
          </Button>
        </Link>
      </Flex>
      {
        isLoading ? (
          <Flex
            justify="center"
          >
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex
            justify="center"
          >
            <Text>Falha ao carregar os usuários!</Text>
          </Flex>
        ) : (
          <>
            <UsersList users={data}/>
            <Pagination />
          </>
        )
      }
    </MainSection>
  );
}