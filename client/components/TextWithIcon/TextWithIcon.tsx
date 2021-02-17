import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import { Box, Text } from "@chakra-ui/react";

interface TextWithIconProps {
  icon: IconifyIcon;
  descr: string;
  classIcon?: string;
  reverse?: boolean;
}

const TextWithIcon: React.FC<TextWithIconProps> = (props) => {
  let Element = [
    <Icon
      icon={props.icon}
      className={props.classIcon}
      style={{
        fontSize: "1.10em",
        transform: "translateY(0.1em)",
      }}
    />,
    <Text as="p" pl="5px">
      {props.descr}
    </Text>,
  ];

  if (props.reverse) Element = Element.reverse();

  return <Box d="flex">{Element}</Box>;
};

export default TextWithIcon;
