import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";

function App() {
  const { state } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={state.user ? <Home /> : <Navigate to={"/login"} /> } />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
