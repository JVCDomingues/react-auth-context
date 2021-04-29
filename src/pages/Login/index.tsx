import React, { useContext, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import {
  Grid,
  Paper,
  TextField,
  Button,
  makeStyles,
  Typography,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";
import { login, setToken } from '../../services/AuthService';
import { UserContext } from '../../contexts/UserContext';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
  paper: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 350
  },
  input: {
    marginBottom: '1rem'
  },
  footer: {
    marginTop: '1rem'
  },
  link: {
    textDecoration: 'none',
  }
}));

function Login() {
  const { addUser } = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [formError, setFormError] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const { token, user } = await login(loginData);
      setToken(token);
  
      addUser(user);
      history.push('/home');
    } catch(err) {
      console.log(err);
      setFormError(true);
    }
  }

  const styles = useStyles();

  return (
    <Grid container className={styles.root}>
      <Paper className={styles.paper} elevation={4}>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            type="email"
            variant="outlined"
            label="E-mail"
            name="email"
            fullWidth
            className={styles.input}
            onChange={handleChange}
            error={formError}
            helperText={formError && 'Credencial inválida'}
          />

          <TextField
            required
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            label="Senha"
            name="password"
            fullWidth
            className={styles.input}
            onChange={handleChange}
            error={formError}
            helperText={formError && 'Credencial inválida'}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }}
          />

          <Button type="submit" fullWidth variant="contained" color="primary">Entrar</Button>
        </form>

        <Typography variant="caption" gutterBottom className={styles.footer}>
          Não possui uma conta? <Typography variant="caption" component={Link} to="/register" className={styles.link}>Cadastre-se</Typography>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login;
