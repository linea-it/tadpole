import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
} from '@material-ui/icons';
import { Button } from '@material-ui/core';
import styles from './styles';

function Header() {
  const classes = styles();

  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    {
      description: 'Início',
      href: '/',
    },
    {
      description: 'Programa',
      href: '/programa',
    },
    {
      description: 'Informações',
      href: '/informacoes',
    },
  ];

  const toggleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.lineaAndSocial}>
            <div className={classes.logos}>
              <a href="http://linea.gov.br/">
                <img
                  src={`${process.env.PUBLIC_URL}/img/logo-linea.png`}
                  alt="LIneA"
                  className={classes.logo}
                />
              </a>
              <a href="https://www.linea.gov.br/3-inct-do-e-universo-2/">
                <img
                  src={`${process.env.PUBLIC_URL}/img/logo-inct.png`}
                  alt="LIneA"
                  className={classes.logoInctMobile}
                />
              </a>
            </div>
            <div className={classes.socialMedia}>
              <a
                href="https://www.facebook.com/linea.mcti"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon className={classes.socialIcon} />
              </a>
              <a href="www.instagram.com/linea_mcti" target="_blank">
                <InstagramIcon className={classes.socialIcon} />
              </a>
              <a
                href="https://twitter.com/LIneA_mcti"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon className={classes.socialIcon} />
              </a>
              <a
                href="https://www.youtube.com/user/lineamcti"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon className={classes.socialIcon} />
              </a>
            </div>
          </div>
          <Button
            color="inherit"
            className={classes.menuMobileButton}
            onClick={toggleMenuClick}
          >
            {menuOpen ? (
              <CloseIcon fontSize="large" color="inherit" />
            ) : (
              <MenuIcon fontSize="large" color="inherit" />
            )}
            Menu
          </Button>
          <List
            className={`${classes.menuList} ${
              menuOpen ? classes.menuMobileOpen : classes.menuMobileClosed
            }`}
          >
            {menus.map((menu, index) => (
              <ListItem key={index} className={classes.listItem}>
                <Link
                  color="inherit"
                  to={menu.href}
                  className={classes.menuLink}
                >
                  {menu.description}
                </Link>
              </ListItem>
            ))}
          </List>
          <a href="https://www.linea.gov.br/3-inct-do-e-universo-2/">
            <img
              src={`${process.env.PUBLIC_URL}/img/logo-inct.png`}
              alt="LIneA"
              className={classes.logoInctComputer}
            />
          </a>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
