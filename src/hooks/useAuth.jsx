import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

    if(!authContext) {
        throw new Error("useAuth must be wrapped inside an auth context provider");
    }

    return authContext;
}