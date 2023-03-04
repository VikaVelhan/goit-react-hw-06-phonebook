import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts(state, action) {},
    deleteContacts(state, action) {},
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContacts, deleteContacts } = contactsSlice.actions;
