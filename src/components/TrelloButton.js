import React from "react";
import styled from "@emotion/styled/macro";
import { Button } from "@mui/material/";

const StyledButton = styled(Button)`
  && {
    color: white;
    background: none;
    font-family: "Poppins", sans-serif;
  }
`;

const TrelloButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

export default TrelloButton;
