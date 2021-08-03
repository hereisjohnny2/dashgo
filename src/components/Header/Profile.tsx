import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return(
    <Flex
      align="center"
    >
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>João Marcelo</Text>
            <Text color="gray.300" fontSize="small">
              carvalho.joaomc@gmail.com
            </Text>
          </Box>
        )
      }
      <Avatar
        size="md"
        name="João Marcelo"
        src="https://github.com/hereisjohnny2.png"
      ></Avatar>
    </Flex>
  );
}