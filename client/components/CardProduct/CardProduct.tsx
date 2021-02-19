import React from "react";
import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import burstNew from "@iconify/icons-foundation/burst-new";
import rubleIcon from "@iconify/icons-cil/ruble";
import shoppingCart from "@iconify/icons-noto-v1/shopping-cart";
import bxSearchAlt from "@iconify/icons-bx/bx-search-alt";

import "./CardProduct.scss";
// @ts-ignore
import cardBackground from "./Card_background.png";
// @ts-ignore
import stars from "./stars.png";

interface CardProductProps {
  productImg: any;
  title: string;
  subtitle: string;
  price: number;
}

const CardProduct: React.FC<CardProductProps> = (props) => {
  return (
    <Box h="314px" w="192px" className="card-product">
      <Image src={cardBackground} />
      <Icon
        icon={burstNew}
        style={{ color: "#FC184F", fontSize: "27px" }}
        className="card-product__icon"
      />
      <Image src={props.productImg} className="card-product__img" />
      <Image src={stars} className="card-product__stars" />
      <h3 className="card-product__title">{props.title}</h3>
      <h4 className="card-product__subtitle">{props.subtitle}</h4>
      <Flex className="card-product__price">
        <Text>Цена: {props.price}</Text>
        <Icon icon={rubleIcon} style={{ color: "#000", fontSize: "9px" }} />
      </Flex>
      <Button
        rightIcon={<Icon icon={shoppingCart} />}
        className="card-product__btn-cart"
      >
        В корзину
      </Button>
      <Button
        rightIcon={<Icon icon={bxSearchAlt} />}
        className="card-product__btn-search"
      >
        Найти похожие
      </Button>
    </Box>
  );
};

export default CardProduct;
