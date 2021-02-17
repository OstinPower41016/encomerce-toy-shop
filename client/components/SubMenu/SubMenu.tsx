import React from "react";
import { Box, Flex, Link, Container, Text, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import bxDownArrow from "@iconify/icons-bx/bx-down-arrow";

import "./SubMenu.scss";

const SubMenu = () => {
  const links = [
    "Для мальчиков",
    "Для девочек",
    "От 2-х до 5-ти лет",
    "От 0 до 2-х лет",
    "Настольные игры",
    "Мягкие игрушки",
  ].map((descr, idx) => (
    <Link
      href="#"
      key={idx}
      d="inline-block"
      className={idx !== 0 ? "sub-menu__link" : ""}
    >
      {descr}
    </Link>
  ));

  return (
    <Box className="sub-menu">
      <Container>
        <Flex className="sub-menu__flex">
          <Text className="sub-menu__text">Перейти к позициям:</Text>
          <nav>{links}</nav>
          <Button
            rightIcon={
              <Icon
                icon={bxDownArrow}
                style={{ color: "#000", fontSize: "7px" }}
              />
            }
            className="sub-menu__button"
          >
            Еще
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default SubMenu;
