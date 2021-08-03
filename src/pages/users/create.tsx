import { 
  Button, 
  Divider, 
  Flex,
  HStack,
  SimpleGrid,
  VStack, 
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { MainSection } from "../../components/MainSection";
import { SectionHeading } from "../../components/SectionHeading";

export default function CreateUser() {
  return (
    <MainSection>
      <SectionHeading title="Criar Usuário"/>
      <Divider my="6" borderColor="gray.700" />
      <VStack spacing="8">
        <SimpleGrid
          spacing="8"
          minChildWidth="240px"
          w="100%"
        >
          <Input name="name" label="Nome Completo" />
          <Input name="email" label="E-mail" type="email"/>
        </SimpleGrid>
        <SimpleGrid
          spacing="8"
          minChildWidth="240px"
          w="100%"
        >
          <Input name="password" label="Senha" type="password" />
          <Input name="password-confirmation" label="Confirmação da senha" type="password"/>
        </SimpleGrid>
      </VStack>
      <Flex
        mt="8"
        justify="flex-end"
      >
        <HStack spacing="4">
          <Link href="/users" passHref>
            <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
          </Link>
          <Button colorScheme="pink">Salvar</Button>
        </HStack>
      </Flex>
    </MainSection>
  );
}