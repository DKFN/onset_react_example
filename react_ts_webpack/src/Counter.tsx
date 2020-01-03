import React from "react";
import { useSelector } from "react-redux";
import { IAppState } from "./redux/reducer";

// The component that renders the counter value
export const Counter = () => {
    const counterValue = useSelector((appState: IAppState) => appState.counter);
    
    return (
        <h1>
            {counterValue}
        </h1>
    );
}
