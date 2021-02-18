import React from "react";
import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import accountCircle from "@iconify/icons-mdi/account-circle";
import shoppingCart from "@iconify/icons-noto-v1/shopping-cart";
// TODO Come back to this later
// @ts-ignore
import logo from "./Logotype.png";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import SearchProducts from "../../components/SearchProducts/SearchProducts";
import TextWithIcon from "../../components/TextWithIcon/TextWithIcon";

import "./FixedHeader.scss";

const FixedHeader = () => {
  return (
    <Box h="60px" bg="rgba(255,255,255)" className="fixed-header">
      <Container>
        <Grid
          h="100%"
          w="100%"
          templateColumns="repeat(23,1fr)"
          alignItems="center"
          justifyItems="center"
        >
          <GridItem colStart={1} colEnd={3}>
            <Image src={logo} />
          </GridItem>
          <GridItem colStart={4} colEnd={7}>
            <BurgerMenu />
          </GridItem>
          <GridItem colStart={8} colEnd={16} w="100%" px="1em">
            <SearchProducts />
          </GridItem>
          <GridItem colStart={20} colEnd={22} justifySelf="end">
            {/* @ts-ignore */}
            <TextWithIcon icon={accountCircle} descr="Войти" />
          </GridItem>
          <GridItem colStart={22} colEnd={24} justifySelf="end">
            {/* @ts-ignore */}
            <TextWithIcon icon={shoppingCart} descr="Корзина" />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default FixedHeader;
