import React from 'react';
import { Grid, Container, Typography, Link } from '@material-ui/core';
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
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="inherit"
              gutterBottom
            >
              O evento <strong>LSST Brazil 2021</strong> é uma iniciativa do{' '}
              <Link
                href="https://www.linea.gov.br"
                target="_blank"
                className={classes.bodyLink}
              >
                Laboratório Interinstitucional de e-Astronomia (LIneA)
              </Link>{' '}
              em apresentar à comunidade brasileira o andamento do ambicioso
              projeto{' '}
              <Link
                href="https://www.lsst.org"
                target="_blank"
                className={classes.bodyLink}
              >
                Legacy Survey of Space and Time (LSST)
              </Link>
              , que será conduzido no <em>Vera C. Rubin Observatory</em> e já
              tem o início de suas atividades programadas para o ano de 2022 e
              se estenderá até 2038.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="inherit"
              gutterBottom
            >
              Com um espelho de 8,4 metros e uma câmara digital de 3,2
              Gigapixels, o LSST produzirá o maior e mais completo mapa do
              Universo, com 37 bilhões de estrelas e galáxias. O LSST é uma
              grande colaboração internacional, com 28 países participando do
              projeto. O Brasil participa do LSST desde 2015 através de um
              acordo do qual o LIneA é signatário. Esta participação é
              coordenada pelo <em>Brazilian Participation Group (BPG-LSST)</em>.
              Recentemente, através de projetos submetidos pelo LIneA, um grande
              número de novas posições estão disponíveis para a comunidade
              brasileira interessada em trabalhar no LSST.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="inherit"
              gutterBottom
            >
              Os objetivos deste evento de dois dias são: (1) trazer
              atualizações sobre o LSST e (2) mostrar as oportunidades para
              comunidade científica e encorajar sua participação neste projeto
              na fronteira do conhecimento. Para tal, foram convidados
              pesquisadores internacionais ligados diretamente ao projeto (dia 1
              - apresentado em inglês) e pesquisadores brasileiros ligados ao
              BPG (dia 2 - apresentado em português).
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="inherit"
              gutterBottom
            >
              O evento será transmitido via YouTube (ver programação), sendo
              100% online e gratuito e aberto a todos os interessados em
              diferentes níveis de carreira. O público é convidado a interagir e
              tirar suas dúvidas, já que todas as perguntas postadas no chat do
              YouTube serão redirecionadas aos palestrantes.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="inherit"
              gutterBottom
            >
              Demais dúvidas podem ser encaminhadas para{' '}
              <strong>
                <Link
                  href="mailto:cde@linea.gov.br"
                  color="primary"
                  className={classes.bodyLink}
                >
                  cde@linea.gov.br
                </Link>
              </strong>
              .
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="center"
              color="inherit"
              gutterBottom
            >
              <strong>
                Venha saber mais e participar de um dos maiores projetos da
                astronomia!
              </strong>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Informacoes;
