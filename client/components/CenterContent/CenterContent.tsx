import React from "react";
import { Flex } from "@chakra-ui/react";

interface CenterContentProps {
  children: any;
  [idx: string]: any;
}

const CenterContent: React.FC<CenterContentProps> = (props) => {
  return (
    <Flex justifyContent="center" alignItems="center" {...props}>
      {props.children}
    </Flex>
  );
};

export default CenterContent;
