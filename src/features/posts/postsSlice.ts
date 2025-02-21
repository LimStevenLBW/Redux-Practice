import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

//All generated actions should be defined using the PayloadAction<T> type from Redux Toolkit, 
//which takes the type of the action.payload field as its generic argument

export interface Post {
    id: string, title: string, content: string, userId: string
}

const initialState: Post[] = [
    { id: '1', title: 'Learning Redux Toolkit', content: "I've heard good things", userId: nanoid() },
    { id: '2', title: 'Slices...', content: "The more i say slice, the more i want pizza", userId: nanoid() },
]

//You may directly mutate state in create slice definition
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action: PayloadAction<Post>) => {
                state.push(action.payload)
            },
            prepare: (title: string, content: string, userId: string) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state: any) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;