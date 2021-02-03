import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// import Image from "next/image";
import { Box, Text, Heading } from "@chakra-ui/react";

const Card = ({ heading, description, icon }) => {
  // Dynamic import from
  // https://medium.com/@erickhoury/react-dynamically-importing-svgs-and-render-as-react-component-b764b6475896

  const importedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(
          `../../public/icons/${icon}.svg`
        );
        importedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [icon]);
  const { current: ImportedIcon } = importedIconRef;

  return (
    <Box
      bg="white"
      display="flex"
      flexDirection="column"
      px="40px"
      py="50px"
      borderRadius={25}
      boxShadow="sm"
    >
      <Box h="95px">
        {!loading && importedIconRef.current ? <ImportedIcon /> : null}
      </Box>
      <Text mt={6} fontSize="2xl" fontWeight="bold" lineHeight="56px">
        {heading}
      </Text>
      <Text color="grey">{description}</Text>
    </Box>
  );
};

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Card;
