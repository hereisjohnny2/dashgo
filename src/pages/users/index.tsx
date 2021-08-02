import { Box, Button, Flex, Heading, Icon} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { UsersList } from "../../components/UsersList";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        maxWidth={1480}
        my="6"
        mx="auto"
        px="6"
      >
        <Sidebar/>
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button 
              as="a" 
              size="sm" 
              fontSize="small" 
              colorScheme="pink" 
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar Usuário
            </Button>
          </Flex>
          <UsersList />
          <Pagination />
        </Box>
      </Flex> 
    </Box>
  );
}