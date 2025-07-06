import supabase from "../db/supabase";
import { useAuth } from "./useAuth";

export const useSignup = () => {
  const { dispatch } = useAuth();

  const signup = async(userData) => {
    try {
      console.log(userData);
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            display_name: userData.name,
          },
          emailRedirectTo: "http://localhost:5173/verify"
        }
      });

      if(!error) {
        console.log(data);
        dispatch({ type: 'SET_USER', payload: userData });
      } else {
        throw new Error(error);
      }
    } catch(error) {
      console.error(error);
    }
  }

  return { signup };
};