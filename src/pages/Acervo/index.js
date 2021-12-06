import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

function Acervo() {
  // Change dynamically the page title:
  document.title = 'LSST Brazil 2021 | Acervo';

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h3" align="center" color="inherit">
            Acervo
          </Typography>
        </Grid>
        <Grid item className={classes.playlistContainer}>
          <iframe
            width="800"
            height="400"
            className={classes.playlist}
            src="https://www.youtube.com/embed/videoseries?list=PLGFEWqwqBauCXpVSDeZeNxptm61pAAkb7&cc_load_policy=1"
            title="Acervo de apresentações sobre o LSST mantidas pelo LIneA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Acervo;
