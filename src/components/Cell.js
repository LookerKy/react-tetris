import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMIONS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell
    type={"L"}
    color={TETROMIONS["L"].color}
  >
    cell
  </StyledCell>
);

export default Cell;
