import React from "react";

import { styled as styledMUI } from "@mui/material/styles";

// import Button from "@material-ui/core/Button";
// In order to use styled components with MaterialUI in npm we have to set an alias in webpack.alias.js.
// In order to access the webpack config files without using eject we need the npm craco package

import { Button } from "@mui/material/";

const StyledButton = styledMUI(Button)`
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
