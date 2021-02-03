import React from "react";
import {
  Box,
  Container,
  Center,
  Heading,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { articleData } from "../mock/data";
import Image from "next/image";
import Card from "../components/utils/ArticleCard";

const Articles = () => {
  return (
    <Box my={36} overflow="hidden" w="100vw">
      <Container maxW="90vw" overflow="hidden">
        <Box
          h="100vh"
          w="70vw"
          overflow="hidden"
          position="absolute"
          zIndex={-1}
          right="-72"
          style={{
            transform: "rotate(180deg)",
          }}
        >
          <Image src="/service-bg.png" layout="fill" />
        </Box>
        <Box>
          <Heading textAlign="center">Check out our articles</Heading>
          <Container w={20} h={1} bg="black" mt={2} mb={5} mx="auto" />
        </Box>
        <Box>
          <SimpleGrid columns={3} gap={6} py={24}>
            {articleData.map((article, index) => (
              <Card
                heading={article.headline}
                thumbnail={article.thumbnail}
                description={article.description}
              />
            ))}
          </SimpleGrid>
        </Box>
        <Center>
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

export default Articles;
