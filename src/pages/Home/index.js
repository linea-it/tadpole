import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';

function Home() {
  // Change dynamically the page title:
  document.title = 'LSST Brazil 2021 | Início';

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.title}>
            LSST Brazil 2021
          </Typography>
          <Typography variant="h2" className={classes.subtitle}>
            Saiba como participar do projeto!
          </Typography>
          <Typography variant="h3" className={classes.dates}>
            07 - 08 de Dezembro
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.logos}>
          <img
            src="/img/lsst-bpg.jpg"
            alt="LSST Brazilian Participation Group"
          />
          <img src="/img/lsst-c.jpg" alt="LSST Corporation" />
          <img src="/img/rubin.jpg" alt="Vera C. Rubin" />
          <img
            src="/img/oba.jpg"
            alt="Olimpíada Brasileira de Astronomia e Astronáutica"
          />
          <img src="/img/sab.jpg" alt="Sociedade Astronômica Brasileira" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
