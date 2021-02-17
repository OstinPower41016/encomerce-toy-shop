import React from "react";
import { Button } from "@chakra-ui/react";

import "./ButtonDetail.scss";

interface ButtonProps {
  descr: string;
  classes: string;
}

const ButtonDetail: React.FC<ButtonProps> = (props) => {
  return <Button className={`button ${props.classes}`}>{props.descr}</Button>;
};

export default ButtonDetail;
