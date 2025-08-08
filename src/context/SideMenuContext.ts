import { createContext } from "react";
import { TSideMenuContext } from "../components/interface";

export const SideMenuContext = createContext<TSideMenuContext | null>(null);
