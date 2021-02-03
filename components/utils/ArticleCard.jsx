import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";
import { Box, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Card = ({ heading, description, thumbnail }) => {
  return (
    <Box
      bg="white"
      display="flex"
      flexDirection="column"
      borderRadius={25}
      boxShadow="sm"
      pb={14}
    >
      <Image src={thumbnail} width={350} height={240} />
      <Box px={6}>
        <Text mt={6} fontSize="xl" fontWeight="bold" lineHeight="32px">
          {heading}
        </Text>
        <Text mt={4} color="grey">
          {description}
        </Text>
        <Button variant="link" colorScheme="blue" mt={6}>
          Read More <ArrowForwardIcon ml={2} />
        </Button>
      </Box>
    </Box>
  );
};

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Card;
