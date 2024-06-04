import React from "react";
import Note from "./Note";

export default function NoteList({ notes }) {
  if (!notes || !Array.isArray(notes)) {
    return <p>No notes available</p>;
  }
  return (
    <>
      <h2>product list</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Images</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <Note key={note._id} note={note} />
          ))}
        </tbody>
      </table>
    </>
  );
}
