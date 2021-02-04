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
import Liquid from "../public/icons/rotated-bg.svg";
import Card from "../components/utils/ArticleCard";

const Articles = () => {
  return (
    <Box my={36} overflow="hidden" zIndex={-1}>
      <Container maxW="90vw">
        <Box>
          <Box position="absolute" zIndex={-1} right={0} opacity={0.3}>
            <Liquid />
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
              See More
            </Button>
          </Center>
        </Box>
      </Container>
    </Box>
  );
};

export default Articles;
