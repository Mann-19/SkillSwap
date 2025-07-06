import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../hooks/useAuth";

export const Home = () => {
  const { state } = useAuth();
  const { logout } = useLogout();

  async function handleLogout(e) {
    e.preventDefault();
    await logout();
  }

  return (
    <div>
      <p className="text-2xl">Home</p>

      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  )
}