import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Add from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import { AppBar, CircularProgress, IconButton, Toolbar } from "@mui/material";
import { AttachMoney, Update } from "@mui/icons-material";
import { useState } from "react";
import apiCaller from "./apiCaller";

function App() {
  const [propertyId, setPropertyId] = useState(1);

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const incrementPropertyId = () => {
    setPropertyId(propertyId + 1);
  };

  const updateEstimatedThroughAPI = async () => {
    setLoading(true);
    setError("");
    setValue("");
    try {
      const result = await apiCaller(propertyId.toString());
      setLoading(false);
      if (result.status === "success") {
        setValue(result.value.toString());
      } else {
        setValue("not found");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" color="inherit">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6">Estimated Home Value</Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        {error && (
          <Typography align="center" variant="h6" color="error">
            {error}
          </Typography>
        )}
        <MenuList>
          <MenuItem onClick={incrementPropertyId}>
            <ListItemIcon>
              <Add fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              Increment property id
              <Typography variant="body2" color="text.secondary">
                Current property id: {propertyId}
              </Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={updateEstimatedThroughAPI}>
            <ListItemIcon>
              <Update fontSize="small" />
            </ListItemIcon>
            <ListItemText>Update estimated value through API</ListItemText>
            {loading ? <CircularProgress /> : null}
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AttachMoney fontSize="small" />
            </ListItemIcon>
            <ListItemText>Estimated value {value}</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </>
  );
}

export default App;
