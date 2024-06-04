import { Link } from "react-router-dom";
import notesStore from "../../storage/notesstore";

export default function UpdateForm() {
  const store = notesStore();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Update note</h2>
      <form onSubmit={store.updateNote}>
        <div className="mb-3">
          <input
            className="form-control"
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.title}
            name="title"
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.Discription}
            name="Discription"
            placeholder="Description"
            style={{
              height: `${
                (store.updateForm.Discription.split("\n").length + 1) * 20
              }px`, // Adjust the height based on the number of lines
              minHeight: "60px", // Set a minimum height to prevent the textarea from collapsing completely
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update note
        </button>
        <Link className="btn btn-secondary float-end" to="/home">
          Go to Home
        </Link>
      </form>
    </div>
  );
}
