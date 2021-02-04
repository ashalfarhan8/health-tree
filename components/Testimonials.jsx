import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React, { useState, useEffect } from "react";

import { Box, Container, Heading, IconButton, Center } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import TestimonialCard from "./utils/TestimonialCard";

const Testimonials = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <IconButton
        icon={<ArrowBackIcon color="accent" />}
        position="absolute"
        bg="white"
        bottom={-28}
        left={80}
        _focus={{
          bg: "white",
          outline: "none",
        }}
      />
    ),
    nextArrow: (
      <IconButton
        icon={<ArrowForwardIcon color="accent" />}
        position="absolute"
        bg="white"
        bottom={-28}
        right={80}
        _focus={{
          bg: "white",
          outline: "none",
        }}
      />
    ),
  };

  const getData = async () => {
    setLoading(true);
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    setUsers([...data.results]);
  };

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Box my={36}>
      <Container maxW="90vw">
        <Box w="80vw" mx="auto" h="100vh" position="relative">
          <Box bg="primary" pt={20} pb={12} borderRadius="24px" color="white">
            <Heading textAlign="center">Testimonial from our customers</Heading>
            <Container w={28} h={1} bg="white" mt={2} mb={5} mx="auto" />
            <Slider {...sliderSettings}>
              {users.map((user, key) => (
                <TestimonialCard
                  userName={user.name.first}
                  image={user.picture.medium}
                  key={key}
                  comments="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nec
        consectetur suspendisse risus, mollis. Accumsan aliquam quis id auctor
        scelerisque risus at. Egestas lacus leo ut aliquet quis. Volutpat massa
        amet, commodo tortor risus mattis in interdum pharetra.”"
                />
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
