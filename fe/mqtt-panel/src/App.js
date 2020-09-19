import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Control from './pages/control/Control';
import Monitor from './pages/monitor/Monitor';

import './App.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
              <Tab label="Control" {...a11yProps(0)} />
              <Tab label="Monitor" {...a11yProps(1)} />
              <Tab label="Simulation" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={value} index={0}>
            <Control/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Monitor/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Simulation page
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
