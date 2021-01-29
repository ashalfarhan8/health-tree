import React, { lazy } from "react";
import Image from "next/image";
import { Box, Text, Heading } from "@chakra-ui/react";

const Card = ({ heading, description, icon, iconW, iconH }) => {
  const Icon = lazy(() => import("../../public/icons/service1.svg"));
  return (
    <Box>
      <Image src={icon} width={iconW} height={iconH} />
      <Heading>{heading}</Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default Card;
