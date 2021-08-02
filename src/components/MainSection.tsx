import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface MainSectionProps {
  children: ReactNode;
}

export function MainSection({ children }: MainSectionProps) {
  return(
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
          {children}
        </Box>
      </Flex> 
    </Box>
  );
}