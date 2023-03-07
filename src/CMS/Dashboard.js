import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import GlobalSidebar from "./scenes/global/Sidebar";
import Home from "./scenes/home";
import Team from "./scenes/team";
import Clients from "./scenes/clients";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme.js";
import Calendar from "./scenes/calendar/calendar";
import Tables from "./scenes/tables";
import EditMenu from "./scenes/edit-menu";
import EditCart from "./scenes/edit-cart";
import "./index.css"

function Dashboard() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="dashboard">
          <GlobalSidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/dashboard-home" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Clients />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/edit-menu" element={<EditMenu />} />
              <Route path="/edit-cart" element={<EditCart />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Dashboard;
