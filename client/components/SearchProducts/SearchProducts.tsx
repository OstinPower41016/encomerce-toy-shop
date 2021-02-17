import React from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import bxSearchAlt from "@iconify/icons-bx/bx-search-alt";

import "./SearchProducts.scss";

const SearchProducts = () => {
  return (
    <InputGroup className="search-products" borderRadius="8px" h="2.1rem">
      <Input
        placeholder="Что будем искать ?"
        fontSize="13px"
        h="2.1rem"
        variant="outline"
        className="search-products__input"
      />
      <InputRightElement h="2.1rem">
        <Button
          variant="outline"
          className="search-products__button"
          h="2rem"
          borderRadius="0"
          minW="5.3em"
          leftIcon={
            <Icon icon={bxSearchAlt} className="search-products__icon-button" />
          }
        >
          <Text fontSize="13px">Поиск</Text>
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchProducts;
