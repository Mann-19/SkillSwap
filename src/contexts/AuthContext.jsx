import { createContext, useEffect, useReducer } from "react";
import supabase from "../db/supabase";

//Set up an initial state
const initialState = {
  user: null,
  isLoading: true,
};

// Declare a context
export const AuthContext = createContext();

// Reducer function to dispatch actions and update state
function authReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload, isLoading: false };
    case "LOGOUT":
      return { user: null, isLoading: false };
    default:
      return state;
  }
}

// The wrapper component (Context Provider)
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check user on mount
  useEffect(() => {
    const checkSessionUser = async () => {
      const { data } = await supabase.auth.getSession();
      dispatch({ type: 'SET_USER', payload: data?.session?.user || null });
    };
    checkSessionUser();

    // Listen auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        dispatch({ type: "SET_USER", payload: session?.user || null });
      }
    );

    // Unsubscribe listener
    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
