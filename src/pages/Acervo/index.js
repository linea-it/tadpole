import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './styles';

function Acervo() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.playlistContainer}>
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
      </div>
    </Container>
  );
}

export default Acervo;
