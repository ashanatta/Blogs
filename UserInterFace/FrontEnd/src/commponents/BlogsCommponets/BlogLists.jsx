import React from "react";
import notesStore from "../../storage/notesstore";
import { Link } from "react-router-dom";

export default function Note({ note, index }) {
  const store = notesStore((store) => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });
  const noteNumber = index + 1;
  return (
    <tr key={note._id}>
      <td>{noteNumber}</td>
      <td>{note.title}</td>
      <td>{note.Discription}</td>

      <td>
        <img
          style={{ width: "100px", height: "auto" }}
          src={`http://localhost:3000/${note.imageUrl}`}
          alt={note.title}
        />
      </td>

      <td>
        <button
          className="btn btn-danger"
          onClick={() => store.deleteNote(note._id)}
        >
          Delete
        </button>
        |
        <Link
          to="/Edit"
          className="btn btn-primary"
          onClick={() => store.toggleUpdate(note)}
        >
          EDIT
        </Link>
      </td>
      <td>{note.category}</td>
    </tr>
  );
}
