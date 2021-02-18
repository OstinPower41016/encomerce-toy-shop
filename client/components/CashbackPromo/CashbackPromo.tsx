import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";

import "./CashbackPromo.scss";
// @ts-ignore
import promoImg from "./Keshback_banner.jpg";

const CashbackPromo = () => {
  return (
    <Box h="100%" w="100%" className="cashback-promo">
      <Image src={promoImg} />
      <Button className="cashback-promo__btn">Подробнее</Button>
    </Box>
  );
};

export default CashbackPromo;
