import supabase from "../db/supabase";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const { dispatch } = useAuth();

  async function login(userData) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: userData.email,
            password: userData.password
        });

        if(error) throw new Error(error);
        dispatch({ type: 'SET_USER', payload: userData });
    } catch(error) {
        console.error(error);
    }
  };

  return { login };
};