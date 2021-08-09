import { Heading, Spinner } from "@chakra-ui/react";

interface SectionHeadingProps {
  title: string;
  isFetching?: boolean
}

export function SectionHeading({ title, isFetching = false }: SectionHeadingProps) {
  return(
    <Heading size="lg" fontWeight="normal">{title}
      {
        isFetching && <Spinner size="sm" color="gray.500" ml="4"/>
      }
    </Heading>
  );
}