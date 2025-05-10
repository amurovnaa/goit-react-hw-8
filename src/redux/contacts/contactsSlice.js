import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectQueryFilter } from "../filters/filtersSlice";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          addContact.pending,
          fetchContacts.pending,
          deleteContact.pending
        ),
        (state, action) => {
          state.error = null;
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addContact.rejected,
          fetchContacts.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = slice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectQueryFilter],
  (contacts, filterValue) => {
    if (filterValue !== "") {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return contacts;
  }
);
