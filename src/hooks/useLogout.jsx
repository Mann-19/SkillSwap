import supabase from "../db/supabase";
import { useAuth } from "./useAuth";

export const useLogout = () => {
  const { dispatch } = useAuth();

  async function logout() {
    try {
        let { error } = await supabase.auth.signOut();

        if(error) throw new Error(error);
        dispatch({ type: 'LOGOUT' });
    } catch(error) {
        console.error(error);
    }
  }

  return { logout };
}