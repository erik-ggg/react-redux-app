import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Internationalization
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@material-ui/core';

import EnglandIcon from '../../../public/static/images/england.png';
import SpainIcon from '../../../public/static/images/spain.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  select_icon: {
    marginRight: theme.spacing(1)
  }
}));

const Header = () => {
  const classes = useStyles();

  // Internationalization
  const { t, i18n } = useTranslation();
  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };

  // History
  const history = useHistory();

  const handleChange = event => {
    changeLanguage(event.target.value);
  };

  return (
    <header className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Button color='inherit' onClick={() => history.push('/')}>
              {t('header.title')}
            </Button>
          </Typography>
          <Button color='inherit' onClick={() => history.push('/about')}>
            About
          </Button>
          <Select
            className={classes.select}
            labelId='language_selector_label'
            onChange={handleChange}
          >
            <MenuItem value={'en'}>
              <img className={classes.select_icon} src={EnglandIcon} />
              {t('en')}
            </MenuItem>

            <MenuItem value={'es'}>
              <img className={classes.select_icon} src={SpainIcon} />
              {t('es')}
            </MenuItem>
          </Select>

          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
