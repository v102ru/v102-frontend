import { createContext } from "react";
import { TNewsCategoriesContext } from "../components/interface";

export const NewsCategoriesContext =
  createContext<TNewsCategoriesContext | null>(null);
