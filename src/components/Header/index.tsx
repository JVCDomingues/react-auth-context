import React, { useContext, useEffect } from 'react';

import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { logout } from '../../services/AuthService';
import { UserContext } from '../../contexts/UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    paddingLeft: 14
  }
}));

function Header() {
  const { user } = useContext(UserContext);

  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            Bem-vindo {user.name} 
          </Typography>
          <Button variant="outlined" component={Link} to="/" color="inherit" onClick={() => logout()}>Sair</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
