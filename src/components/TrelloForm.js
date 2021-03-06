import React from "react";
import { Card, Icon } from "@mui/material/";
import styled from "@emotion/styled/macro";
import Textarea from "react-textarea-autosize";

const Container = styled("div")`
  width: 284px;
  margin-bottom: 8px;
  font-family: "Poppins", sans-serif;
`;

const StyledCard = styled(Card)`
  min-height: 85px;
  padding: 6px 8px 2px;

  background-color: rgba(255, 255, 255, 0.01);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  font-family: "Poppins", sans-serif;
`;

const StyledTextArea = styled(Textarea)`
  background-color: rgba(255, 255, 255, 0.01);
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  &::selection {
    color: white;
    background: none;
  }
`;

const ButtonContainer = styled("div")`
  margin-top: 8px;
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-family: "Poppins", sans-serif;
`;

const StyledIcon = styled(Icon)`
  margin-left: 8px;
  cursor: pointer;
`;

const TrelloForm = React.memo(({ list, text = "", onChange, closeForm, children }) => {
  const placeholder = list ? "Enter list title..." : "Enter a title for this card...";

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <Container>
      <StyledCard>
        <StyledTextArea placeholder={placeholder} autoFocus onFocus={handleFocus} value={text} onChange={(e) => onChange(e)} onBlur={closeForm} />
      </StyledCard>
      <ButtonContainer>
        {children}
        <StyledIcon onMouseDown={closeForm}>close</StyledIcon>
      </ButtonContainer>
    </Container>
  );
});

export default TrelloForm;
