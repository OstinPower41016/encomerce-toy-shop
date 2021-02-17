import React from "react";
import location12Regular from "@iconify/icons-fluent/location-12-regular";
import bxPhoneCall from "@iconify/icons-bx/bx-phone-call";
import { Box, Container, Flex, Spacer, Link } from "@chakra-ui/react";

import TextWithIcon from "../../components/TextWithIcon/TextWithIcon";

import "./TopHeader.scss";

const TopHeader = () => {
  return (
    <Box bg="#fff" h="35px" className="top-header">
      <Container h="100%">
        <Flex w="100%" h="100%" alignItems="center">
          <Flex w="50%">
            <Box>
              <TextWithIcon
                // @ts-ignore
                icon={location12Regular}
                s
                descr="Ейск и Ейский район"
              />
            </Box>
            <Spacer />
            <Box>
              <TextWithIcon
                // @ts-ignore
                icon={bxPhoneCall}
                descr="8-800-888-88-88"
                classIcon="top-header__phone-icon"
              />
            </Box>
          </Flex>
          <Spacer />
          <Flex className="top-header__links">
            <Link href="#">Доставка</Link>
            <Link href="#">Оплата</Link>
            <Link href="#">Скидки</Link>
            <Link href="#">Помощь</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default TopHeader;
