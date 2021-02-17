import React from "react";
import { Button } from "@chakra-ui/react";

import { Icon } from "@iconify/react";
import arrowLeft from "@iconify/icons-bi/arrow-left";

interface ButtonControlsProps {
  prevHandler: () => void;
  nextHandler: () => void;
}

const ButtonControls: React.FC<ButtonControlsProps> = (props) => {
  return (
    <>
      <Button
        variant="link"
        className="carousel__btn-control"
        onClick={props.prevHandler}
        leftIcon={
          <Icon icon={arrowLeft} style={{ color: "#000", fontSize: "7px" }} />
        }
      >
        Пред. слайд
      </Button>
      <Button
        variant="link"
        className="carousel__btn-control"
        onClick={props.nextHandler}
        rightIcon={
          <Icon
            icon={arrowLeft}
            style={{ color: "#000", fontSize: "7px" }}
            hFlip={true}
          />
        }
      >
        След. слайд
      </Button>
    </>
  );
};

export default ButtonControls;
