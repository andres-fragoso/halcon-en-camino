import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Emergencia() {
  const [confirmado, setConfirmado] = useState(false);

  const enviarAlerta = () => {
    const matricula = sessionStorage.getItem("matricula");
    alert(`🚨 Alerta enviada para la matrícula: ${matricula || 'desconocida'}`);
    setConfirmado(true);
  };

  return (
    <>
      <Head>
        <title>Botón de Emergencia</title>
        <style>{`
          body {
            background-image: url('/background.jpg');
            background-size: cover;
            background-position: center;
            margin: 0;
            font-family: sans-serif;
            padding-bottom: 60px;
            color: white;
            text-shadow: 1px 1px 4px black;
          }
          .container {
            padding: 60px 20px;
            min-height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            text-align: center;
          }
          button {
            margin-top: 40px;
            padding: 20px 30px;
            background-color: red;
            color: white;
            font-size: 18px;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            cursor: pointer;
          }
        `}</style>
      </Head>
      <Navbar />
      <div className="container">
        <h1>Botón de Emergencia</h1>
        <p>Presiona este botón si estás en una situación de peligro.</p>
        <button onClick={enviarAlerta}>🚨 ENVIAR ALERTA</button>
        {confirmado && <p>🔔 Se ha enviado una alerta de emergencia.</p>}
      </div>
    </>
  );
}
