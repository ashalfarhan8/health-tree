import React from "react";
import {
  Box,
  Container,
  Text,
  Button,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";

const Medicine = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={36}>
      <Container maxW="90vw">
        <SimpleGrid columns={2}>
          <Image src="/medicine.png" width={652} height={454} />
          <Box my="auto">
            <Heading lineHeight="56px" size="2xl">
              Leading healthcare providers
            </Heading>
            <Box w={28} h={1} bg="black" mt={4} ml={0.5} />
            <Text fontSize="lg" my={4} color="grey">
              Heatlh-Tree provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </Text>
            <Button
              borderRadius="25px"
              size="lg"
              px={12}
              color="primary"
              borderColor="primary"
              variant="outline"
            >
              Browse
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Medicine;
