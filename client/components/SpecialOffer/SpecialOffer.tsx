import React, { useState } from "react";
import { Box, Container, Flex, Text, Button } from "@chakra-ui/react";

import "./SpecialOffer.scss";
// @ts-ignore
import background from "./images/Background_image.jpg";
import CenterContent from "../CenterContent/CenterContent";
import Card from "./Card/Card";
// @ts-ignore
import image from "./images/Product.png";
import timerInit from "../Timer/Timer";
import useInterval from "../../hooks/useInterval";

interface SpecialOfferProps {
  oldPrice: number;
  price: number;
  deadline: any;
}

const SpecialOffer: React.FC<SpecialOfferProps> = (props) => {
  const timer = timerInit(props.deadline);

  return (
    <Box>
      <Container className="special-offer" bg={`url(${background})`} h="329px">
        <Box ml="550px" h="100%" w="100%">
          <Flex classNAme="special-offer__fcontainer" h="100%">
            <Box className="special-offer__content" h="100%">
              <Text className="special-offer__timer-goal">
                Временное обновление цены
              </Text>
              <Text className="special-offer__remained-promo">
                до конца акции осталось:
              </Text>
              <Flex className="special-offer__timer-deadline" spacing={10}>
                <Box className="special-offer__time">{timer.days}</Box>
                <Box className="special-offer__time">{timer.hours}</Box>
                <Box className="special-offer__time">{timer.minutes}</Box>
                <Box className="special-offer__time">{timer.seconds}</Box>
              </Flex>
              <Flex className="special-offer__timer-highlight">
                <Box className="special-offer__descr-time">
                  {timer.daysLetter}
                </Box>
                <Box className="special-offer__descr-time">
                  {timer.hoursLetter}
                </Box>
                <Box className="special-offer__descr-time">
                  {timer.minutesLetter}
                </Box>
                <Box className="special-offer__descr-time">
                  {timer.secondsLetter}
                </Box>
              </Flex>

              <Text className="special-offer__timer-price">
                Новая цена:&nbsp;
                <span className="special-offer__old-price">
                  {props.oldPrice}
                </span>
                &nbsp; {props.price} рублей
              </Text>
              <Button className="special-offer__btn">Хочу! В корзину</Button>
            </Box>

            <Box className="special-offer__card" w="100%" h="100%">
              <Card
                image={image}
                title="LoL surprize"
                subtitle="Last Edition"
                remained={5}
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default SpecialOffer;
