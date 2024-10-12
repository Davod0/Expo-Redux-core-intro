import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type userState = {
    firstName: string,
    lastName: string,
    age: number
}

const initialState: userState = {
    firstName: "",
    lastName: "",
    age: 0
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action: PayloadAction<userState>) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.age = action.payload.age
        },
        clearUser: (state, action: PayloadAction<userState>) => {
            state.firstName = ''
            state.lastName = ''
            state.age = 0
        },
    },
})

export const { createUser, clearUser } = userSlice.actions

export default userSlice.reducer