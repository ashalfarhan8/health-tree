import React from "react";
import { Container, Box, Text, Flex, Circle } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Box
        w="full"
        bgGradient="linear(to-r, primary, secondary)"
        py="103px"
        px="144px"
        color="white"
      >
        <Container maxW="95vw">
          <Flex>
            <Box w="417px" mr="8">
              <Flex align="center">
                <Circle size="54px" bg="white">
                  <Text fontSize="3xl" color="primary">
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
              <Text fontSize="lg" pt="3">
                Health-Tree provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </Text>
              <Text mt="2">©HEALTH THREE. All rights reserved</Text>
            </Box>
            <Box mr="8">
              <Text fontSize="xl" fontWeight="bold">
                Company
              </Text>
              <Box mt="7">
                <Text mt="2">About</Text>
                <Text mt="2">Testimonials</Text>
                <Text mt="2">Find a doctor</Text>
                <Text mt="2">Apps</Text>
              </Box>
            </Box>
            <Box mr="8">
              <Text fontSize="xl" fontWeight="bold">
                Region
              </Text>
              <Box mt="7">
                <Text mt="2">Singapore</Text>
                <Text mt="2">Indonesia</Text>
                <Text mt="2">Taiwan</Text>
                <Text mt="2">Malaysia</Text>
              </Box>
            </Box>
            <Box mr="8">
              <Text fontSize="xl" fontWeight="bold">
                Help
              </Text>
              <Box mt="7">
                <Text mt="2">Help Center</Text>
                <Text mt="2">Customer Service</Text>
                <Text mt="2">Instructions</Text>
                <Text mt="2">How It Works</Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
