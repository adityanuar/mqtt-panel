import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperRoot: {
    display: "inline-block",
    // flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(50),
    },
  },
  pathLayout: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(12),
    },
  },
  path: {
    margin: theme.spacing(1),
  },
}));

export default function Control() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} className={classes.pathLayout}>
        <Typography color="textPrimary" gutterBottom className={classes.path}>
          Mosquitto Path:
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="path"
            variant="outlined"
            fullWidth
          />
        </form>
        <Button variant="contained" color="primary" padding="10px">
          Set
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.paperRoot}>
        <Card elevation={5}>
          <CardContent>
            <Box align="center">
                <Typography color="textSecondary" gutterBottom align="center">
                Server Status: ON
                </Typography>
                <Switch
                    checked={state.checked}
                    onChange={handleChange}
                    color="primary"
                    name="checked"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
