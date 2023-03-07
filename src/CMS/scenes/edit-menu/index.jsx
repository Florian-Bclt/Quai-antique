import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const EditMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Menu" subtitle="Gestion du menu" />
      <Box>

      </Box>
    </Box>
  );
};

export default EditMenu;
