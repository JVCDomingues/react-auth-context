import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import {
  Grid,
  Paper,
  TextField,
  Button,
  makeStyles,
  Typography,
  InputAdornment,
  IconButton
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";
import api from '../../services/api';

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
  link: {
    textDecoration: 'none',
    marginTop: '1rem'
  }
}));

function Register() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [formError, setFormError] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const styles = useStyles();
  const history = useHistory();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setRegisterData({
      ...registerData,
      [name]: value
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await api.post('/auth/register', registerData);
      history.push('/');
    } catch (error) {
      setFormError(true);
    }

  }

  return (
    <Grid
      container
      className={styles.root}
    >
      <Paper className={styles.paper} elevation={4}>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            variant="outlined"
            label="Nome"
            name="name"
            fullWidth
            className={styles.input}
            onChange={handleChange}
          />

          <TextField
            required
            variant="outlined"
            label="E-mail"
            name="email"
            fullWidth
            error={formError}
            helperText={formError && 'E-mail já cadastrado!'}
            className={styles.input}
            onChange={handleChange}
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
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }}
          />

          <Button type="submit" fullWidth variant="contained" color="primary">Registrar</Button>
        </form>

        <Typography variant="caption" component={Link} to="/" className={styles.link}>Fazer login</Typography>

      </Paper>
    </Grid>
  )
}

export default Register;
