import React from "react";
import Image from "next/image";

import {
  Box,
  Container,
  Text,
  Button,
  Heading,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

import AppleStore from "../public/icons/applestore.svg";
import Playstore from "../public/icons/playstore.svg";

const MobileApps = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={36}>
      <Container maxW="90vw">
        <SimpleGrid columns={2} gap={8}>
          <Box my="auto">
            <Heading lineHeight="56px" size="2xl">
              Download Our Mobile Apps
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
              color="primary"
              borderColor="primary"
              variant="outline"
              leftIcon={<Playstore />}
            >
              Via Playstore
            </Button>
            <Button
              ml={4}
              borderRadius="25px"
              size="lg"
              color="primary"
              borderColor="primary"
              variant="outline"
              leftIcon={<AppleStore />}
            >
              Via Applestore
            </Button>
          </Box>
          <Image src="/mobile.png" width={568} height={562} />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MobileApps;
