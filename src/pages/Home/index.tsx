import React, { useEffect } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import { getToken } from '../../services/AuthService';

function Home() {
  useEffect(() => {
    async function getData() {
      const response = await api.get('/projects');
      const { data } = response;

      console.log(data);
    }

    getData();
  }, []);

  return (
    <>
      <Header />
    </>
  )
}

export default Home;
