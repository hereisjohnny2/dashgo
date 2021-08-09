import { Button, Flex, Icon, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { MainSection } from "../../components/MainSection";
import { Pagination } from "../../components/Pagination";
import { SectionHeading } from "../../components/SectionHeading";
import { UsersList } from "../../components/UsersList";
import { useUsers } from "../../services/hooks/users/useUsers";

export default function Users() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isFetching } = useUsers(page);
  

  return (
    <MainSection>
      <Flex mb="8" justify="space-between" align="center">
        <SectionHeading 
          title="Usuários"
          isFetching={!isLoading && isFetching}
        />
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
            <UsersList users={data?.users}/>
            <Pagination
              totalCountOfRegisters={data.totalCount}
              currentPage={page}
              onPageChange={setPage}
            />
          </>
        )
      }
    </MainSection>
  );
}