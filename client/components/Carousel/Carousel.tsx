import React, { useReducer, useState } from "react";
import { Box, Container, Flex, Image, Text, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import giftDuotone from "@iconify/icons-ph/gift-duotone";
import clickIcon from "@iconify/icons-tabler/click";
import arrowDownCircle from "@iconify/icons-bi/arrow-down-circle";
import cn from "classnames";
import { cloneDeep } from "lodash";

import "./Carousel.scss";
import ButtonControls from "./ButtonControls/ButtonControls";
import CenterContent from "../CenterContent/CenterContent";
import useInterval from "../../hooks/useInterval";

interface CarouselProps {
  content: {
    image: any;
    header: string;
    description: string;
  }[];
  delay?: number;
}

const reducer = (state: any, action: any) => {
  const newState = cloneDeep(state);
  newState.oldCurretSlide = state.currentSlide;

  switch (action.type) {
    case "prevSlide":
      if (state.currentSlide === 0) {
        newState.currentSlide = state.slidesAmount;
      } else {
        newState.currentSlide = state.currentSlide - 1;
      }
      return newState;
    case "nextSlide":
      if (state.slidesAmount === state.currentSlide) {
        newState.currentSlide = 0;
      } else {
        newState.currentSlide = state.currentSlide + 1;
      }
      return newState;
    default:
      throw new Error("unknown action type");
  }
};

const Carousel: React.FC<CarouselProps> = (props) => {
  const initialState = {
    currentSlide: 0,
    oldCurretSlide: null,
    slidesAmount: props.content.length - 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [pause, setPause] = useState(false);

  props.delay &&
    useInterval(
      () => {
        dispatch({ type: "nextSlide" });
      },
      pause ? null : props.delay
    );

  let mouseOutHandler;
  let mouseOverHandler;

  if (props.delay) {
    mouseOutHandler = () => setPause(false);
    mouseOverHandler = () => setPause(true);
  }

  const createJsxElementfromSlide = (
    element: "image" | "description" | "header"
  ) => {
    const arrayElements = props.content.map((slideContent, idx) => {
      const className = cn("carousel__slide-element", {
        "carousel__slide-element_current-slide": state.currentSlide === idx,
        "carousel__slide-element_hidden-slide": state.oldCurretSlide === idx,
      });

      if (element === "image") {
        return (
          <Image src={slideContent.image} className={className} key={idx} />
        );
      } else if (element === "header") {
        return (
          <h2 key={idx} className={`carousel__slide-header ${className}`}>
            {slideContent.header}
          </h2>
        );
      } else if (element === "description") {
        return (
          <Text
            className={`carousel__slide-description ${className}`}
            key={idx}
          >
            {slideContent.description}
          </Text>
        );
      }
    });
    return arrayElements;
  };

  return (
    <Box
      className="carousel"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <Container h="100%" w="100%" contentCenter>
        <Flex className="carousel__content">
          <Box className="carousel__slide">
            {createJsxElementfromSlide("image")}
          </Box>
          <Box className="carousel__slide-info">
            <Flex className="carousel__btn-controls" mb="10px">
              <ButtonControls
                prevHandler={() => dispatch({ type: "prevSlide" })}
                nextHandler={() => dispatch({ type: "nextSlide" })}
              />
            </Flex>
            <hr />
            <CenterContent>{createJsxElementfromSlide("header")}</CenterContent>
            <CenterContent pt="10px">
              {createJsxElementfromSlide("description")}
            </CenterContent>
            <Button
              className="carousel__button-detail carousel__button-detail_top"
              _hover={{ bg: "#d12323" }}
              rightIcon={<Icon icon={giftDuotone} style={{ color: "#fff" }} />}
            >
              Подробнее об акции
            </Button>
            <Button
              className="carousel__button-detail carousel__button-detail_bottom"
              _hover={{ bg: "#333734" }}
              rightIcon={<Icon icon={clickIcon} style={{ color: "#fff" }} />}
            >
              Перейти в каталог
            </Button>
          </Box>
        </Flex>
        <CenterContent>
          <Icon
            icon={arrowDownCircle}
            style={{ color: "#000" }}
            className="carousel__arrow-down"
          />
        </CenterContent>
      </Container>
    </Box>
  );
};

export default Carousel;
