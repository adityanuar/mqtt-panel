import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";

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
  cardSubscription: {
    background: "#000000",
    height: theme.spacing(48),
    overflow: "auto",
  },
  textlogSubscription: {
    color: "#9bed5c",
    backgroundColor: "#333232",
    marginTop: theme.spacing(.5),
  },
}));

export default function Monitor() {
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
          Subscribe topic:
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="topic"
            variant="outlined"
            fullWidth
          />
        </form>
        <Button variant="contained" color="primary" padding="10px">
          Set
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.paperRoot}>
        <Box>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Typography color="textSecondary" gutterBottom align="center">
                Auto Update:
              </Typography>
              <Switch
                checked={state.checked}
                onChange={handleChange}
                color="primary"
                name="checked"
                size="small"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>
          </Grid>
          <Card elevation={5} className={classes.cardSubscription}>
            <CardContent>
              <Box align="left">
                <div
                  className={classes.textlogSubscription}
                  dangerouslySetInnerHTML={{
                    __html:
                      '{ "online" : false, "tags": { "engine_speed": 300 }}, "tags": { "engine_speed": 300 }}, "tags": { "engine_speed": 300 }}',
                  }}
                ></div>
                <div
                  className={classes.textlogSubscription}
                  dangerouslySetInnerHTML={{
                    __html:
                      '{ "online" : false, "tags": { "engine_speed": 300 }}, "tags": { "engine_speed": 300 }}, "tags": { "engine_speed": 300 }}',
                  }}
                ></div>
                <div
                  className={classes.textlogSubscription}
                  dangerouslySetInnerHTML={{
                    __html:
                      '{ "online" : false, "tags": { "engine_speed": 300 }}, "tags": { "engine_speed": 300 }}, "tags": { "engine_speed": 300 }}',
                  }}
                ></div>
                <div
                  className={classes.textlogSubscription}
                  dangerouslySetInnerHTML={{
                    __html:
                      '{ "online" : false, "tags": { "engine_speed": 300 }}, "tags": { "engine_speed": 300 }}, "tags": { "engine_speed": 300 }}',
                  }}
                ></div>
                <div
                  className={classes.textlogSubscription}
                  dangerouslySetInnerHTML={{
                    __html:
                      '{ "online" : false, "tags": { "engine_speed": 300 }}, "tags": { "engine_speed": 300 }}, "tags": { "engine_speed": 300 }}',
                  }}
                ></div>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
