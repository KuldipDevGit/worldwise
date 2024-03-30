import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Grid, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <Stack height={"100vh"} position="relative">
      <Grid container textAlign={"center"}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <AppNav />
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems={"flex-end"}
        className={styles.footer} // Add class to the footer grid
        position="absolute" // Position the footer absolutely
        bottom={0} // Place the footer at the bottom
        width="100%" // Set width to fill the container
      >
        <Grid item xs={12} textAlign={"center"}>
          <footer>
            <p className={styles.copyright}>
              &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
            </p>
          </footer>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Sidebar;
