import notesStore from "../../storage/notesstore";
import AuthStore from "../../storage/AuthStore";
import BlogLists from "./BlogLists";
import { useEffect } from "react";

export default function BlogDataTable() {
  const { notes, fetchNotesByUserId } = notesStore();
  const { user } = AuthStore();

  useEffect(() => {
    fetchNotesByUserId(user.id);
  }, []);

  return (
    <>
      <h2>Blog data</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Images</th>
            <th>Action</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {notes &&
            notes.map((note, index) => {
              return <BlogLists note={note} key={index} index={index} />;
            })}
        </tbody>
      </table>
    </>
  );
}
