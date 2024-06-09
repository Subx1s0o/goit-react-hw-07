import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, phone) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            phone: phone,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      },
    },
    prepare(id) {
      return {
        payload: id,
      };
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
