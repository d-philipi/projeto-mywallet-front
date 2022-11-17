import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';

export default function Rota1() {

  const { exemplo } = useContext(MyContext);

    return (
      <>
        Olá, sou a rota 1!
      </>
    );
  }