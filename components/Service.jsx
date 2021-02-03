import React from "react";
import Image from "next/image";

import { serviceData } from "../mock/data";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import Card from "./utils/ServiceCard";

const Service = () => {
  return (
    <Box h="auto" my={36}>
      <Container maxW="90vw" position="relative">
        <Box h="100vh" w="900px" position="absolute" zIndex={-1}>
          <Image src="/service-bg.png" layout="fill" />
        </Box>
        <Text textAlign="center" fontSize={26} pt={8} fontWeight="semibold">
          Our Serices
        </Text>
        <Container w={24} h={1} bg="black" mb={8} />
        <Text textAlign="center" w="80vw" mx="auto" color="grey">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </Text>
        <SimpleGrid columns={3} row={2} gap={35} mt="90px">
          {serviceData.map((item, index) => {
            return (
              <Card
                heading={item.title}
                description={item.desc}
                icon={item.icon}
              />
            );
          })}
        </SimpleGrid>
        <Center py="52px">
          <Button
            borderRadius="25px"
            size="lg"
            px={14}
            color="primary"
            borderColor="primary"
            variant="outline"
          >
            Learn More
          </Button>
        </Center>
      </Container>
    </Box>
  );
};

export default Service;
