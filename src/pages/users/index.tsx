import { Button, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine } from "react-icons/ri";
import { MainSection } from "../../components/MainSection";
import { Pagination } from "../../components/Pagination";
import { SectionHeading } from "../../components/SectionHeading";
import { UsersList } from "../../components/UsersList";

export default function Users() {
  useEffect(() => {
    const users = fetch("http://localhost:3000/api/users");    
  }, []);
  
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
      <UsersList />
      <Pagination />
    </MainSection>
  );
}