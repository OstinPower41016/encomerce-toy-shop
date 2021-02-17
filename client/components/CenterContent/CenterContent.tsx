import React from "react";
import { Flex } from "@chakra-ui/react";

interface CenterContentProps {
  className?: string;
  children: any;
  pt?: string;
}

const CenterContent: React.FC<CenterContentProps> = (props) => {
  return (
    <Flex justifyContent="center" className={props.className} pt={props.pt}>
      {props.children}
    </Flex>
  );
};

export default CenterContent;
