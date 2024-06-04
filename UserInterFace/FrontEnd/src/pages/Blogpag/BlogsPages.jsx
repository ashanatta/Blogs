import React from "react";
import { useEffect } from "react";
import BlogDataTable from "../../commponents/BlogsCommponets/BlogDataTable";
import notesStore from "../../storage/notesstore";
import Header from "../../commponents/HeaderCommponets/Header";

function NotesPages() {
  const store = notesStore();

  // Use effect
  useEffect(() => {
    store.fetchNotes();
  }, []);
  return (
    <div>
      <Header />
      <BlogDataTable notes={store.notes} />
    </div>
  );
}

export default NotesPages;
