import React from "react";
import PropTypes from "prop-types";

// import Image from "next/image";
import { Grid, GridItem, Text, Box, Avatar } from "@chakra-ui/react";

const TestimonialCard = ({ image, userName, comments, key }) => {
  return (
    <Grid column={3} gap={24} w="60vw" mx="auto" h={230} key={key}>
      <GridItem
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width={140}
          height={140}
          borderRadius="full"
          borderColor="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          //   position="relative"
          //   zIndex="auto"
        >
          {/* <Image src={image} layout="fill" objectFit="contain" quality={100} /> */}
          <Avatar
            size="2xl"
            name={userName}
            src={image}
            border="2px"
            borderColor="white"
          />
        </Box>
        <Text fontSize="xl">{userName}</Text>
      </GridItem>
      <GridItem
        rowStart={1}
        colSpan={2}
        colStart={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="lg" fontWeights="thin">
          {comments}
        </Text>
      </GridItem>
    </Grid>
  );
};

TestimonialCard.propTypes = {
  image: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
};

export default TestimonialCard;
