import { Grid } from "@mui/material";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <Grid container p={2}>
      <Grid item xs={6} sx={{ background: "#333333" }}>
        <Sidebar />
      </Grid>
      <Grid item xs={6}>
        <Map />
      </Grid>
    </Grid>
  );
}

export default AppLayout;
