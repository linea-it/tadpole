import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Container,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Paper,
  Tooltip,
  Link,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import {
  VideoLibrary as VideoLibraryIcon,
  Description as DescriptionIcon,
  YouTube as YouTubeIcon,
} from '@material-ui/icons';

import schedule from './schedule.json';
import styles from './styles';

function TabPanel(props) {
  const [scheduleSelected, setScheduleSelected] = useState(schedule.events[0]);
  const { value, index } = props;
  const classes = styles();

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const StyledTableCell = withStyles((theme) => ({
    root: {
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.2rem',
        padding: '10px 20px',
        maxWidth: 265,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
    },
  }))(TableCell);

  const TooltipInfo = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: 0,
      fontSize: 14,
    },
  }))(Tooltip);

  useEffect(() => {
    setScheduleSelected(schedule.events[value]);
  }, [value]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <TableContainer component={Paper} key={scheduleSelected.id}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" align="center" color="primary">
              {scheduleSelected.date}
            </Typography>
            <Typography variant="h6" align="center" color="primary">
              {`Moderadora: ${scheduleSelected.chair}`}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              className={classes.youtubeTypography}
            >
              <Link target="_blank" href={scheduleSelected.youtube}>
                <span>
                  YouTube
                  <YouTubeIcon />
                </span>
              </Link>
            </Typography>
          </Toolbar>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Horário BRT (UTC-3)</StyledTableCell>
                <StyledTableCell>Título</StyledTableCell>
                <StyledTableCell>Palestrante</StyledTableCell>
                <StyledTableCell>Afiliação</StyledTableCell>
                <StyledTableCell>Slide</StyledTableCell>
                <StyledTableCell>Gravação</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scheduleSelected.rows.map((row) => {
                if (row.break) {
                  return (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell
                        align="center"
                        colSpan="6"
                        className={classes.tableCell}
                      >
                        Intervalo
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                }
                return (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.time}
                    </StyledTableCell>
                    <StyledTableCell>
                      <TooltipInfo
                        classes={{ tooltip: classes.customWidth }}
                        title={
                          <>
                            <Typography gutterBottom color="inherit">
                              Title:
                            </Typography>
                            <Typography
                              gutterBottom
                              color="inherit"
                              variant="body2"
                            >
                              {row.title}
                            </Typography>
                          </>
                        }
                      >
                        <span>{row.title}</span>
                      </TooltipInfo>
                    </StyledTableCell>
                    <StyledTableCell>{row.speaker}</StyledTableCell>
                    <StyledTableCell>{row.affiliation}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.slide ? (
                        <IconButton href={row.slide} target="_blank">
                          <DescriptionIcon />
                        </IconButton>
                      ) : (
                        '-'
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.youtube ? (
                        <IconButton href={row.youtube} target="_blank">
                          <VideoLibraryIcon />
                        </IconButton>
                      ) : (
                        '-'
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Program() {
  // Change dynamically the page title:
  document.title = 'LSST Brazil 2021 | Program';
  const classes = styles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" color="inherit">
          Programa
        </Typography>
        <br />
        <br />
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
            >
              <Tab label="Dia 1" className={classes.tab} {...a11yProps(0)} />
              <Tab label="Dia 2" className={classes.tab} {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} />
          <TabPanel value={value} index={1} />
        </div>
      </Grid>
    </Container>
  );
}

export default Program;
