import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import notesStore from "../../storage/notesstore";
import AuthStore from "../../storage/AuthStore";
import Sidebar from "../BlogsCommponets/Sidebar";
import "../Home/homestyle.css";

function FatchBlog() {
  const { notes, fetchAllNotes } = notesStore();
  const { user } = AuthStore();
  const [expandedNotes, setExpandedNotes] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});

  useEffect(() => {
    const storedLikeCounts = JSON.parse(localStorage.getItem("likeCounts"));
    if (storedLikeCounts) {
      setLikeCounts(storedLikeCounts);
    }
    fetchAllNotes();
    console.log("userid Home Page useEffect =>", user);
  }, []);

  useEffect(() => {
    localStorage.setItem("likeCounts", JSON.stringify(likeCounts));
  }, [likeCounts]);

  return (
    <div className="container-fluid">
      {/* Sidebar */}
      {/* <Sidebar /> */}
      {/* Main Content */}
      <div className="main-content" style={{ flex: "1" }}>
        <h2 className="text-center my-4 ">Blogs</h2>
        {notes ? (
          <div className="row sibling-fade">
            {notes.map((note) => (
              <div key={note._id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <Link to={`/blog/${note._id}`}>
                    <img
                      className="card-img-top"
                      src={`http://localhost:3000/${note.imageUrl}`}
                      alt={note.title}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">{note.title}</h5>
                      <p className="fw-bold text-light mb-2">
                        <span className="bg-info rounded p-2">
                          {note.category}
                        </span>
                      </p>
                    </div>
                    <p className="card-text">
                      {expandedNotes.includes(note._id)
                        ? note.Discription
                        : note.Discription.split(" ").slice(0, 10).join(" ") +
                          "..."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default FatchBlog;
