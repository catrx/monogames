import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Games from "./views/games";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/games"
        element={<Games />}
      />
    </Routes>
  );
}
