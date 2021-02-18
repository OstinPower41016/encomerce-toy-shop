import React from "react";
import { Flex, Box, Image, UnorderedList, ListItem } from "@chakra-ui/react";

interface AdvantagesDescrWithImageProps {
  image: any;
  li: string[];
}

const AdvantagesDescrWithImage: React.FC<AdvantagesDescrWithImageProps> = (
  props
) => {
  return (
    <Flex alignItems="center">
      <Image src={props.image} maxW="10%" />
      <UnorderedList pl="25px" fontWeight="500">
        {props.li.map((li) => (
          <ListItem p="5px 0">{li}</ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default AdvantagesDescrWithImage;
