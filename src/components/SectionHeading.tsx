import { Heading } from "@chakra-ui/react";

interface SectionHeadingProps {
  title: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return(
    <Heading size="lg" fontWeight="normal">{title}</Heading>
  );
}