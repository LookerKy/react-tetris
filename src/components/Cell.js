import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMIONS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMIONS[type].color}>
    {console.log("re-render")}
  </StyledCell>
);

export default React.memo(Cell);
