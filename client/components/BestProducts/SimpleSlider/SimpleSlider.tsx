import React, { useReducer, useEffect } from "react";
import { Flex, Box, HStack, IconButton } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import arrowLeftSquareFill from "@iconify/icons-bi/arrow-left-square-fill";
import chunk from "lodash/chunk";

import "./SimpleSlider.scss";

interface SimpleSliderProps {
  itemsSlider: any[];
  className: string;
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "nextSlide":
      return { ...state, position: state.position + 1 };
    case "prevSlide":
      return { ...state, position: state.position - 1 };
    case "resetPosition":
      return { ...state, position: 0 };
    default:
      throw new Error("unknown action type");
  }
};

const SimpleSlider: React.FC<SimpleSliderProps> = (props) => {
  const groupSlides = chunk(props.itemsSlider, 4);
  const initialState = { position: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "resetPosition" });
  }, [props.itemsSlider]);

  return (
    <Flex className={`simple-slider ${props.className}`}>
      <IconButton
        aria-label="prev-slide"
        variant="unstyled"
        isDisabled={state.position === 0}
        onClick={() => dispatch({ type: "prevSlide" })}
        icon={
          <Icon
            icon={arrowLeftSquareFill}
            style={{ color: "#FC184F", fontSize: "37px" }}
          />
        }
      />

      <Box className="simple-slider__track">
        <Box
          className="simple-slider__content"
          transform={`translateX(-${state.position}00%)`}
        >
          {groupSlides.map((slides, idx) => {
            return (
              <Box flex="1 0 100%" key={idx}>
                <Flex justifyContent="space-between">{slides}</Flex>
              </Box>
            );
          })}
        </Box>
      </Box>
      <IconButton
        aria-label="next-slide"
        variant="unstyled"
        isDisabled={state.position === groupSlides.length - 1}
        onClick={() => dispatch({ type: "nextSlide" })}
        icon={
          <Icon
            icon={arrowLeftSquareFill}
            style={{ color: "#FC184F", fontSize: "37px" }}
            hFlip
          />
        }
      />
    </Flex>
  );
};

export default SimpleSlider;
