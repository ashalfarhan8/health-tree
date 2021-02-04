import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

const Hero = () => {
  return (
    <Box display="flex" alignItems="center" mb={36} mt={8}>
      <Container maxW="90vw" position="relative">
        <SimpleGrid columns={2} spacing={2}>
          <Box>
            <Heading fontSize={50} textTransform="capitalize">
              Virtual heath assistant with real-time monitoring
            </Heading>
            <Text textTransform="capitalize" fontSize={20} my={8} color="grey">
              Health-Tree provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </Text>
            <Button
              borderRadius="full"
              bg="primary"
              size="lg"
              color="white"
              _hover={{ color: "primary", bg: "white" }}
            >
              Consult Today
            </Button>
          </Box>
          <Image src="/hero.png" width={691} height={490} position="absolute" />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
