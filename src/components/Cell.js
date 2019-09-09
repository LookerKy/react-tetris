import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMIONS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell
    type={type}
    color={TETROMIONS[type].color}
  />
);

export default Cell;
