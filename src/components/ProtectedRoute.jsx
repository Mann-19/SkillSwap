import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
    const { state } = useAuth();

    if(state.isLoading) {
        return <div className="w-20 h-20 aspect-square border-4 border-emerald-500 border-t-transparent"></div>
    }

    if(!state.user) {
        return <Navigate to={"/login"} />
    }

    return children;
}