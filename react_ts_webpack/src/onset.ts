import {incrementCounter} from "./redux/reducer";
import {store} from "./redux/store";
import { AnyAction } from "@reduxjs/toolkit";

/**
 * You should not edit this file this is how your redux actions work with onset land.
 * 
 * Its kinda hacky but makes sure the functions dont get renamed by webpack
 */
type ForeignAction = (...args: any[]) => AnyAction;
export const wrapAction = (fn: ForeignAction) => (...args: any[]) => store.dispatch(fn(...args));
