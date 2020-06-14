// this sets up a 'slice'
import { createSlice } from '@reduxjs/toolkit';

// make a constant 'factsSlice'
// call the method createSlice
// set the name and initial value
// then set the reducer methods
export const factsSlice = createSlice({
    name: 'facts',
    initialState: {
        value: 100
    },
    reducers: {
        // state is in the store
        // it's set below
        // action is used to passed something in
        // .payload is what's being passed in
        addFact: (state, action) => {
            state.value += action.payload;
        },
        removeFact: (state, action) => {
            state.value -= action.payload;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
});

// set the reducers above equal to the variable with .actions
export const { addFact, removeFact, incrementByAmount } = factsSlice.actions;

// export a variable that sets the component state
// to the state in the store
export const selectFacts = state => state.counter2.value;

// then export the variable with .reducer
export default factsSlice.reducer;