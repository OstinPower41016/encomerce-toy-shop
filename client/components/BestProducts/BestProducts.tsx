import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Stack,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import cn from "classnames";
import { Icon } from "@iconify/react";
import stopwatchIcon from "@iconify/icons-emojione/stopwatch";

import "./BestProducts.scss";
import CardProduct from "../CardProduct/CardProduct";
import SimpleSlider from "./SimpleSlider/SimpleSlider";

// @ts-ignore
import productImg from "./images/Product.png";
import CenterContent from "../CenterContent/CenterContent";
// @ts-ignore
import decorationImg from "./images/Rectangle.png";

const cards1 = new Array(9).fill(
  <CardProduct
    productImg={productImg}
    title="Lol surprise"
    subtitle="Последняя серия из новой"
    price={386}
  />
);
const cards2 = new Array(11).fill(
  <CardProduct
    productImg={productImg}
    title="Lol surprise"
    subtitle="Последняя серия из хитов продаж"
    price={386}
  />
);
const cards3 = new Array(8).fill(
  <CardProduct
    productImg={productImg}
    title="Lol surprise"
    subtitle="Последняя серия из распродаж"
    price={386}
  />
);
const allCards = [cards1, cards2, cards3];

const BestProducts = () => {
  const [currentTab, setTab] = useState("new");
  const tabsName = [
    { en: "new", ru: "Новинки" },
    { en: "hits", ru: "Хиты продаж" },
    { en: "sale", ru: "Распродажа" },
  ];

  const recognizeTab = () => {
    if (currentTab === "new") return 0;
    if (currentTab === "hits") return 1;
    if (currentTab === "sale") return 2;
  };

  return (
    <Box className="best-products">
      <Container className="best-products__container">
        <Flex className="best-products__top" mb="15px">
          <Box>
            <h2 className="best-products__header">Лучшие предложения</h2>
          </Box>
          <Stack spacing="15px" direction="row">
            {tabsName.map((tabName, idx) => {
              return (
                <Button
                  className={cn("best-products__btn", {
                    "best-products__btn_active": recognizeTab() === idx,
                  })}
                  key={idx}
                  onClick={() => setTab(tabName.en)}
                >
                  {tabName.ru}
                </Button>
              );
            })}
          </Stack>
        </Flex>
        <SimpleSlider
          itemsSlider={allCards[recognizeTab()!]}
          className="best-products__slider"
        />

        <CenterContent className="best-products__bottom">
          <Text>
            Листай ниже, чтобы увидеть самое топовое&nbsp;
            <span className="best-products__text-highlight">
              СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
            </span>
          </Text>
          <Icon
            icon={stopwatchIcon}
            style={{ fontSize: "20px" }}
            className="best-products__icon"
          />
        </CenterContent>
        <Image
          src={decorationImg}
          className="best-products__decoration-element"
        />
      </Container>
    </Box>
  );
};

export default BestProducts;
