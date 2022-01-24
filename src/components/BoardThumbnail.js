import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 10vh;
  width: 30vw;
  background: none;
  background-color: none;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;#
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 2rem;
`;

const Title = styled.h4`
  color: white;
  text-decoration: none;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoardThumbnail = ({ title }) => {
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
