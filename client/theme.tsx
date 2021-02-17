import { extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      body: {
        bg: "#f5f5f5",
        fontFamily: "Comfortaa, cursive",
        color: "#594e4e",
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: "1200px",
        h: "100%",
      },
    },
    Button: {
      baseStyle: { _focus: { boxShadow: "none" }, _hover: { bg: "none" } },
      variants: {
        outline: { _hover: { bg: "none" } },
        ghost: { _hover: { bg: "none" } },
        solid: { _hover: { bg: "none" } },
      },
    },
    Input: {
      variants: {
        outline: {
          field: { _focus: { boxShadow: "none", borderColor: "none" } },
        },
      },
      baseStyle: { field: { boxShadow: "none" } },
    },
  },
};

export default extendTheme(theme);
