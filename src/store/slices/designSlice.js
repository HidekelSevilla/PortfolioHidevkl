import { createSlice } from '@reduxjs/toolkit';

export const designSlice = createSlice({
    name: 'design',
    initialState: {
        toggleSkills: false,
        controlLoop: true
    },


    reducers: {
        toggleSkills: (state) => {
            (state.toggleSkills)
                ?
                state.toggleSkills = false
                :
                state.toggleSkills = true
        },
        toggleLoop: (state, payload) => {
            state.controlLoop = payload.payload;
        }
    }
});

export const { toggleSkills, toggleLoop } = designSlice.actions;