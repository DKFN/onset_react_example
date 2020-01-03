import { createAction, AnyAction, createReducer } from "@reduxjs/toolkit";
import { wrapAction } from "../onset";

// Here I create an action that takes no argument
export const incrementCounter = createAction("INCREMENT_COUNTER");

// I want this action to be available to Onset so I attach it globally
(window as any).incrementCounter = wrapAction(incrementCounter)

// Here I declare the state of my whole application
// I only have one of course because this is only counting
export interface IAppState {
    counter: number;
}

const initialState: IAppState = {
    counter: 0
};

// Here it is my reducer, his tasks is to merge the future state with
export const counterReducer = createReducer(initialState, {
    [incrementCounter.type]: (state) => ({ ...state, counter: state.counter + 1 })
});
