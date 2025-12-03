import React from "react";

const Note = ({ note, id, onDelete }) => {
  function handleClick() {
    onDelete(id)
  }
      
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.note}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
};

export default Note;
