
import { AppBar, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Search } from "@mui/icons-material";
import { display } from "@mui/system";


const useStyles = makeStyles((theme)=>({

    toolbar:{
      display:"flex",
      justifyContent:"space-center"

    },
    
    logoLg:{
        display:'none',
        [theme.breakpoints.up("sm")]:{
            display:"block"

        },


    },

    logoSm:{
        display:'block',
        [theme.breakpoints.up("sm")]:{
            display:"none",

        },

    },

    search:{

    },

  



}));

const NavBar = () => {

    const classes = useStyles();

    return ( 

        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6"  className={classes.logoLg} >
                    Material-UI

                </Typography>
                <Typography variant="h6" className={classes.logoSm}  >
                    MUI

                </Typography>
                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder="Search"/>


                </div>
                Icons


            </Toolbar>
        </AppBar>

     );
}
 
export default NavBar;