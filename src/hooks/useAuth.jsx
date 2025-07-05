import { AuthContext, useContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

    if(!authContext) {
        throw new Error("Component muse be wrapped inside an auth context provider");
    }

    return authContext;
}