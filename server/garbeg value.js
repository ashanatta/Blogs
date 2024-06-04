///user for card data fatching from data base

{
  /* <div key={note._id}> */
}
{
  /* <div className="card"> */
}
{
  /* <div className="container" style={{ padding: 0 }}> */
}
{
  /* <img width="100%" src={`http://localhost:3000/${note.imageUrl}`} />
            {console.log(`http://localhost:3000/${note.imageUrl}`)} */
}
{
  /* <h4> */
}
{
  /* <b>{note.title}</b> */
}
{
  /* </h4> */
}
{
  /* <p>{note.Discription}</p> */
}
{
  /* </div> */
}
{
  /* <button onClick={() => store.deleteNote(note._id)}>
            Delete note
          </button>
          <button onClick={() => store.toggleUpdate(note)}>Update note</button> */
}
{
  /* </div> */
}
{
  /* </div> */
}

{
  /* <tbody>
{dataList[0] ? (
  dataList.map((el) => {
    return (
      <tr>
        <td>{el.name}</td>
        <td>{el.email}</td>
        <td>{el.mobile}</td>
        <td>{el.Age}</td>
      </tr>
    );
  })
) : (
  <p>No Data is Avalible</p>
)}
</tbody> */
}

// note store

// import { create } from "zustand";
// import axios from "axios";

// const notesStore = create((set) => ({
//   notes: null,

//   createForm: {
//     title: "",
//     Discription: "",
//   },

//   updateForm: {
//     _id: null,
//     title: "",
//     Discription: "",
//   },

//   fetchNotes: async () => {
//     // Fetch the notes
//     const res = await axios.get("/notes");

//     // Set to state
//     set({ notes: res.data.notes });
//   },

//   updateCreateFormField: (e) => {
//     const { name, value } = e.target;

//     set((state) => {
//       return {
//         createForm: {
//           ...state.createForm,
//           [name]: value,
//         },
//       };
//     });
//   },

//   createNote: async (e) => {
//     e.preventDefault();

//     const { createForm, notes } = notesStore.getState();
//     const res = await axios.post("http://localhost:3000/notes", createForm);

//     set({
//       notes: [...notes, res.data.note],
//       createForm: {
//         title: "",
//         Discription: "",
//       },
//     });
//   },

//   deleteNote: async (_id) => {
//     // Delete the note
//     const res = await axios.delete(`http://localhost:3000/notes/${_id}`);
//     const { notes } = notesStore.getState();

//     // Update state
//     const newNotes = notes.filter((note) => {
//       return note._id !== _id;
//     });

//     set({ notes: newNotes });
//   },

//   handleUpdateFieldChange: (e) => {
//     const { value, name } = e.target;

//     set((state) => {
//       return {
//         updateForm: {
//           ...state.updateForm,
//           [name]: value,
//         },
//       };
//     });
//   },

//   toggleUpdate: ({ _id, title, Discription }) => {
//     set({
//       updateForm: {
//         title,
//         Discription,
//         _id,
//       },
//     });
//   },

//   updateNote: async (e) => {
//     e.preventDefault();

//     const {
//       updateForm: { title, Discription, _id },
//       notes,
//     } = notesStore.getState();

//     // Send the update request
//     const res = await axios.put(`http://localhost:3000/notes/${_id}`, {
//       title,
//       Discription,
//     });

//     // Update state
//     const newNotes = [...notes];
//     const noteIndex = notes.findIndex((note) => {
//       return note._id === _id;
//     });
//     newNotes[noteIndex] = res.data.note;

//     set({
//       notes: newNotes,
//       updateForm: {
//         _id: null,
//         title: "",
//         Discription: "",
//       },
//     });
//   },
// }));

// export default notesStore;
