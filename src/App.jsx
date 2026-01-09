import {ThemeProvider } from "styled-components";
import AppRoutes from "./components/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import { TaskProvider } from "./context/TaskProvider";
import { GlobalStyles } from "./GlobalStyles";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={{ isDark }}>
      <GlobalStyles />
      <AuthProvider>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </AuthProvider>
   </ThemeProvider>);
}

export default App;

