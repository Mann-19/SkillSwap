import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Verify } from "./pages/Verify";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main home route (protected) */}
        <Route
          index
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {/* Login Route */}
        <Route path="/login" element={<Auth />} />
        {/* Email verification route */}
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
