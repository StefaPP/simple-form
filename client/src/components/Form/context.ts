import { IFormContext } from "./types";
import { createContext } from "react";

export const FormContext = createContext<IFormContext | undefined>(undefined);