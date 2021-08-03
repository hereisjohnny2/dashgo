import { Button, Icon, useBreakpointValue } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

export function EditUserButton() {
  return(
    <Button 
      as="a" 
      size="sm" 
      fontSize="small" 
      colorScheme="purple" 
      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
    >
      Editar
    </Button>
  );
}