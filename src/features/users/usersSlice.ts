import { createSlice } from "@reduxjs/toolkit";

export interface User {
    id: string, name: string
}

const kv1: User = { id: '1', name: "Bob" };
const kv2: User = { id: '2', name: "Jane" };

const initialState: User[] = [
    kv1, kv2
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state: { users: User; }) => state.users;

export default usersSlice.reducer;