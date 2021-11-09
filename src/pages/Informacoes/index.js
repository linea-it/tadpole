import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';

function Informacoes() {
  const classes = useStyles();
  // Change dynamically the page title:
  document.title = 'LSST Brazil 2021 | Informações Adicionais';

  return (
    <div>
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="inherit">
              Informações
            </Typography>
            <br />
            <br />
            <Typography>...</Typography>
            <br />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Informacoes;
