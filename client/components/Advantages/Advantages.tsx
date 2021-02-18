import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Container,
  Button,
  Image,
} from "@chakra-ui/react";

import "./Advantages.scss";
import CenterContent from "../CenterContent/CenterContent";
import AdvantagesDescrWithImage from "./AdvantagesDescrWithImage";

// @ts-ignore
import delivery from "./images/delivery.png";
// @ts-ignore
import gift from "./images/gift.png";
// @ts-ignore
import help from "./images/help.png";
// @ts-ignore
import decorationImg from "./images/Rectangle.png";

const li = [
  "Быстрая и своевременная доставка игрушек",
  "Возврат товара при выевления определенных неточностей или повреждении товара при транспортировке",
  "Проверка товара на наличие брака при передачи товара курьеру",
];

const buttons = [
  { name: "delivery", descr: "Узнать больше о способах доставки" },
  { name: "help", descr: "Заказать консультацию" },
  {
    name: "gift",
    descr: `Узнать больше о бонусной системе скидок`,
  },
];

const Advantages = () => {
  return (
    <Box className="advantages">
      <Container bg="#fff" borderRadius="11px" p="1em">
        <CenterContent>
          <h2 className="advantages__header">
            Преймущества использования нашего магазина
          </h2>
        </CenterContent>
        <Grid className="advantages__grid">
          <GridItem className="advantages__grid-delivery">
            <AdvantagesDescrWithImage image={delivery} li={li} />
          </GridItem>
          <GridItem className="advantages__grid-help">
            <AdvantagesDescrWithImage image={help} li={li} />
          </GridItem>
          <GridItem className="advantages__grid-gift">
            <AdvantagesDescrWithImage image={gift} li={li} />
          </GridItem>
          <GridItem className="advantages__grid-divider" />
          {buttons.map(({ name, descr }) => {
            return (
              <GridItem className={`advantages__btn-${name}`}>
                <Button
                  fontSize="14px"
                  whiteSpace="normal"
                  w="250px"
                  className="advantages__btn"
                >
                  {descr}
                </Button>
              </GridItem>
            );
          })}
        </Grid>
        <Image src={decorationImg} className="advantages__decoration-element" />
      </Container>
    </Box>
  );
};

export default Advantages;
