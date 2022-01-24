import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { sort, setActiveBoard } from "../actions";

import TrelloList from "./TrelloList";
import TrelloCreate from "./TrelloCreate";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TrelloBoard = (props) => {
  const { boardID } = useParams();

  const { lists, cards, boards } = props;
  const board = boards[boardID];
  const listOrder = board.lists;

  useEffect(() => {
    props.dispatch(setActiveBoard(boardID));
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    props.dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId, type));
  };

  if (!board) {
    return <p>Board not found</p>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Link to="/">Go Back</Link>
      <h2>{board.title}</h2>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <ListsContainer {...provided.droppableProps} ref={provided.innerRef}>
            {listOrder.map((listID, index) => {
              const list = lists[listID];
              if (list) {
                const listCards = list.cards.map((cardID) => cards[cardID]);

                return <TrelloList listID={list.id} key={list.id} title={list.title} cards={listCards} index={index} />;
              }
            })}
            {provided.placeholder}
            <TrelloCreate list />
          </ListsContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists,
  cards: state.cards,
  boards: state.boards,
});

export default connect(mapStateToProps)(TrelloBoard);
