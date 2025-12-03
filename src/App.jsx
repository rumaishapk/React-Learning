import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import Card from "./Card";
import { useState } from "react";

const App = () => {
  const [notes, setNote] = useState([]);

  function submit(newNote) {
    setNote((prevNotes) => [...prevNotes, newNote]);
  }
  function handleDelete(id) {
    setNote((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <Card createNote={submit} />
      {notes &&
        notes.map((note, index) => (
          <Note note={note} onDelete={handleDelete} id={index} />
        ))}
      <Footer />
    </div>
  );
};

export default App;
