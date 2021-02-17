import React from "react";
import { Text, Box } from "@chakra-ui/react";

import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const arrayCubes: JSX.Element[] = new Array(9).fill(<span></span>);

  return (
    <Box bg="#fff" d="flex" className="burger-menu">
      <Text burger-menu__text>Каталог</Text>
      <Box className="burger-menu__icon">{arrayCubes}</Box>
    </Box>
  );
};

export default BurgerMenu;
