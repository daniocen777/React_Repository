import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes, Person } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utils";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
    name: 'people',
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ?
        JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string) :
        initialState,
    reducers: {
        addPeple: (state, action) => {
            setLocalStorage(LocalStorageTypes.PEOPLE, state);
            return action.payload;
        }
    }
});

export const { addPeple } = peopleSlice.actions;