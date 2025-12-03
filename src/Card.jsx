import React, { useState } from "react";


const Card = ({createNote}) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  function handleChange(event) {
    setTitle(event.target.value);
  }
  function handleNote(event) {
    setNote(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault()
   createNote({title,note})
  }

  return (
    <form>
      <input onChange={handleChange} type="text" placeholder="Title" />
      <textarea onChange={handleNote} type="text" placeholder="Take a Note" />
      <button onClick={handleClick} className="form">
        add
      </button>
    </form>
  );
};

export default Card;
