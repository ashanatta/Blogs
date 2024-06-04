import React from "react";
import notesStore from "../../storage/notesstore";
import { Link } from "react-router-dom";
export default function CreateForm() {
  const store = notesStore();
  if (store.updateForm._id) return <></>;

  const handleFileChange = (e) => {
    store.setFile(e.target.files[0]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Create New Blog</h2>
          <form onSubmit={store.createNote} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={store.createForm.title}
                onChange={store.updateCreateFormField}
                placeholder="Enter title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="Discription"
                value={store.createForm.Discription}
                onChange={store.updateCreateFormField}
                placeholder="Enter description"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="category"
                name="category"
                value={store.createForm.category}
                onChange={store.updateCreateFormField}
              >
                <option value="">Select category</option>
                <option value="car">Car</option>
                <option value="natural">Natural</option>
                <option value="mobiles">Mobiles</option>
                <option value="PC">PC</option>
                <option value="laptop">laptop</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                onChange={handleFileChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create note
            </button>
          </form>
          <Link className="btn btn-secondary float-end" to="/home">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
