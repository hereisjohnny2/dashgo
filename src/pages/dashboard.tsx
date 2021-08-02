import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { DashboardCharts } from "../components/DashboardCharts";

const series = [
  {
    name: "series1",
    data: [31,120,10,28,51,18,109] 
  },
];

export default function Dashboard() {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />
      <Flex
        w="100%"
        maxWidth={1480}
        my="6"
        mx="auto"
        px="6"
      >
        <Sidebar/>
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <DashboardCharts title="Inscritos da Semana" series={series} />
          <DashboardCharts title="Taxa de Abertura" series={series} />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}