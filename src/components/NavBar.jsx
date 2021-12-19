import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search,Mail, Notifications } from "@mui/icons-material";
import { display } from "@mui/system";
import { alpha } from "@material-ui/core/styles";
import Badge from '@material-ui/core/Badge';
import { Avatar } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
  },

  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
      display: 'flex',
      alignItems:"center",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Material-UI
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          MUI
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search" className={classes.input} />
        </div>
        <div className={classes.icons}>
          <Badge badgeContent={5} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="/static/images/tom.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
