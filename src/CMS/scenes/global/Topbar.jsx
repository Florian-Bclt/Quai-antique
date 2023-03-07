import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import { Link } from "react-router-dom";
import './Topbar.css'

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* GO TO WEBSITE */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <button className="website-btn">
          Aller sur le site 
          <i><TrendingFlatOutlinedIcon/></i>
          <Link to='/' />
        </button>
      </Box>

      <div class="floating-butt">
        <input type="checkbox" id="add" />
        <label for="add">
          <div class="hide-butt">
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <PersonOutlinedIcon />
            <LogoutOutlinedIcon />

          </div>
          <div class="butt"><i class="bx bx-cog"></i><SettingsOutlinedIcon /></div>
        </label>
    </div>

    </Box>
  );
};

export default Topbar;
