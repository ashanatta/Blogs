import { create } from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
  notes: null,

  createForm: {
    title: "",
    Discription: "",
    category: "",
  },

  updateForm: {
    _id: null,
    title: "",
    Discription: "",
    category: "",
  },

  file: null,

  setFile: (file) => {
    set({ file });
  },

  fetchAllNotes: async (userId) => {
    try {
      const path = `/notes`;

      const res = await axios.get(path);
      console.log("userId is react=>", userId);
      set({ notes: res.data.notes });
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  },

  fetchNotes: () => {
    console.log("here is error");

    return [];
  },
  SomeTest: () => {
    console.log("SomeTest");
    return [];
  },
  fetchNoteById: async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/notes/${id}`);
      return res.data.note;
    } catch (error) {
      console.error("Error fetching note by ID:", error);
      return null;
    }
  },
  fetchNotesByUserId: async (userId) => {
    try {
      const path = `/notes?user_id=${userId}`;

      const res = await axios.get(path);
      console.log("userId is react=>", userId);
      set({ notes: res.data.notes });
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  },
  updateCreateFormField: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      createForm: {
        ...state.createForm,
        [name]: value,
      },
    }));
  },

  createNote: async (e) => {
    e.preventDefault();

    const { createForm, notes, file } = notesStore.getState();

    try {
      const formData = new FormData();
      formData.append("title", createForm.title);
      formData.append("Discription", createForm.Discription);
      formData.append("category", createForm.category);
      formData.append("image", file);

      const res = await axios.post("http://localhost:3000/notes", formData);

      set({
        notes: [...notes, res.data.note],
        createForm: { title: "", Discription: "", category: "" },
        file: null,
      });
    } catch (error) {
      console.error("Error creating note:", error);
    }
  },

  deleteNote: async (_id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${_id}`);
      const { notes } = notesStore.getState();
      const newNotes = notes.filter((note) => note._id !== _id);
      set({ notes: newNotes });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;
    set((state) => ({
      updateForm: {
        ...state.updateForm,
        [name]: value,
      },
    }));
  },

  toggleUpdate: ({ _id, title, Discription }) => {
    set({
      updateForm: { title, Discription, _id },
    });
  },

  updateNote: async (e) => {
    e.preventDefault();

    const { updateForm, notes } = notesStore.getState();

    try {
      const res = await axios.put(
        `http://localhost:3000/notes/${updateForm._id}`,

        {
          title: updateForm.title,
          Discription: updateForm.Discription,
        }
      );

      const newNotes = [...notes];
      const noteIndex = notes.findIndex((note) => note._id === updateForm._id);
      newNotes[noteIndex] = res.data.note;

      set({
        notes: newNotes,
        updateForm: { _id: null, title: "", Discription: "" },
      });
    } catch (error) {
      console.error("Error updating note:", error);
    }
  },
}));

export default notesStore;
