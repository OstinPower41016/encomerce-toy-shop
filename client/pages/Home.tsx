import React from "react";
import { Box, Container, Image } from "@chakra-ui/react";

import "./Home.scss";
import Carousel from "../components/Carousel/Carousel";
// @ts-ignore
import slide from "./f1.jpg";
import SubMenu from "../components/SubMenu/SubMenu";

const content = {
  image: slide,
  header: "Lorem Ipsum",
  description:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna orci, blandit sed urna a, commodo posuere odio. Phasellus quis rhoncus massa. Nullam venenatis dui at tempus feugiat.  ",
};
const content2 = {
  image: slide,
  header: "Lorem Ipsum2",
  description:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna orci, blandit sed urna a, commodo posuere odio. Phasellus quis rhoncus massa. Nullam venenatis dui at tempus feugiat.  ",
};
const content3 = {
  image: slide,
  header: "Lorem Ipsum3",
  description:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna orci, blandit sed urna a, commodo posuere odio. Phasellus quis rhoncus massa. Nullam venenatis dui at tempus feugiat.  ",
};

const Home = () => {
  return (
    <Box className="home" w="100%" pt="1.5em">
      <Container h="100%">
        <SubMenu />
        <Carousel content={[content, content2, content3]} delay={7000} />
        <h3>sdf</h3>
      </Container>
    </Box>
  );
};

export default Home;
