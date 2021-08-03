import { 
  Box,
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
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha é obrigatória").min(8, "No mínimo 8 caracteres"),
  passwordConfirmation: yup.string().oneOf([
    null,
    yup.ref("password")
  ], "As senha precisam ser iguais")
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;


  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {}

  return (
    <MainSection>
      <Box as="form" onSubmit={handleSubmit(handleCreateUser)}>
        <SectionHeading title="Criar Usuário"/>
        <Divider my="6" borderColor="gray.700" />
        <VStack spacing="8">
          <SimpleGrid
            spacing="8"
            minChildWidth="240px"
            w="100%"
          >
            <Input error={errors.name} label="Nome Completo" {...register("name")}/>
            <Input error={errors.email} label="E-mail" type="email"{...register("email")}/>
          </SimpleGrid>
          <SimpleGrid
            spacing="8"
            minChildWidth="240px"
            w="100%"
          >
            <Input error={errors.password} label="Senha" type="password" {...register("password")}/>
            <Input error={errors.passwordConfirmation} label="Confirmação da senha" type="password" {...register("passwordConfirmation")}/>
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
            <Button isLoading={formState.isSubmitting} type="submit" colorScheme="pink">Salvar</Button>
          </HStack>
        </Flex>
      </Box>
    </MainSection>
  );
}