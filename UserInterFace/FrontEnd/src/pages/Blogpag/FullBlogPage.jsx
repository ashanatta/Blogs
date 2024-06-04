import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link
import notesStore from "../../storage/notesstore";

function FullBlogPage() {
  const { id } = useParams();
  const fetchNoteById = notesStore((state) => state.fetchNoteById);
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      const fetchedNote = await fetchNoteById(id);
      setNote(fetchedNote);
    };

    fetchNote();
  }, [id, fetchNoteById]);

  return (
    <>
      <Link className="btn btn-secondary float-start m-3" to="/home">
        Go to Home
      </Link>
      <div style={{ display: "flex", maxWidth: "600px", margin: "0 auto" }}>
        {note ? (
          <div style={{ padding: "20px", width: "100%" }}>
            <h1>{note.title}</h1>
            <img
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "5px",
              }}
              src={`http://localhost:3000/${note.imageUrl}`}
              alt={note.title}
            />
            <p className="fw-bold mt-4">Category: {note.category}</p>

            <p className="mt-3">{note.Discription}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default FullBlogPage;
