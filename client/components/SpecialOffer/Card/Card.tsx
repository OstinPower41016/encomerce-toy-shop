import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

import "./Card.scss";
import CenterContent from "../../CenterContent/CenterContent";

interface CardProps {
  image: any;
  title: string;
  subtitle: string;
  remained: number;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <CenterContent w="100%" h="100%" alignItems="none" className="card">
      <Box className="card__content">
        <Image src={props.image} className="card__image" />
        <h3 className="card__title">{props.title}</h3>
        <h4 className="card__subtitle">{props.subtitle}</h4>
        <Text className="card__remained">Осталось: {props.remained} штук</Text>
      </Box>
    </CenterContent>
  );
};

export default Card;
