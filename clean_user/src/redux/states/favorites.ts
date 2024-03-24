import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes, Person } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utils";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ?
        JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string) :
        initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Person[]>) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, state);
            return action.payload;
        }
    }
});

export const { addFavorite } = favoritesSlice.actions;