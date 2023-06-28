import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "profile/:userId",
    element: <ProfilePage />,
  },
]);

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
