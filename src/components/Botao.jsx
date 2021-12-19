import { Button, makeStyles } from "@material-ui/core";





const useStyles = makeStyles((theme)=>({

    button:{
        ...theme.myButton
    },


}));



const Botao = () => {
    const classes = useStyles();
  return (
    <Button
    variant="contained"
     size="large"
      className={classes.button}
    >
      Sou um botao do material
    </Button>
  );
};

export default Botao;
