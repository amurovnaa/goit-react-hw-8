import { createSelector } from "@reduxjs/toolkit";
import { selectQueryFilter } from "../filters/slice";

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
