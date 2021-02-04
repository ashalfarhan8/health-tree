import React from "react";
import { Container, Circle, Text, Flex, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Container maxW="90vw">
        <Flex justify="between" maxW="full" py="7">
          <Flex align="center">
            <Circle size="54px" bg="primary">
              <Text color="white" fontSize="3xl">
                H
              </Text>
            </Circle>
            <Text
              textTransform="uppercase"
              ml="4"
              fontSize="2xl"
              fontWeight="semibold"
            >
              Health-tree
            </Text>
          </Flex>
          <Spacer />
          <Flex
            align="center"
            color="ternary"
            fontWeight="medium"
            cursor="pointer"
          >
            <Text
              px="4"
              _hover={{
                color: "accent",
                textDecoration: "underline",
              }}
            >
              Home
            </Text>
            <Text
              px="4"
              _hover={{
                color: "accent",
                textDecoration: "underline",
              }}
            >
              Find a doctor
            </Text>
            <Text
              px="4"
              _hover={{
                color: "accent",
                textDecoration: "underline",
              }}
            >
              Apps
            </Text>
            <Text
              px="4"
              _hover={{
                color: "accent",
                textDecoration: "underline",
              }}
            >
              Testimonials
            </Text>
            <Text
              px="4"
              _hover={{
                color: "accent",
                textDecoration: "underline",
              }}
            >
              About Us
            </Text>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
