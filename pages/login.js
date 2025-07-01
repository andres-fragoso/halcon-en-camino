import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Login() {
  const [numero, setNumero] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const regex = /^\d{10}$/;
    if (regex.test(numero)) {
      router.push('/bienvenida');
    } else {
      alert('Ingresa un número válido de 10 dígitos');
    }
  };

  return (
    <>
      <Head>
        <style>{`
          body {
            background-image: url('/background.jpg');
            background-size: cover;
            background-position: center;
            margin: 0;
            font-family: sans-serif;
            color: white;
            text-shadow: 1px 1px 4px black;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
          }
          input {
            padding: 8px;
            margin: 5px;
            width: 250px;
            font-size: 16px;
            text-align: center;
          }
        `}</style>
      </Head>
      <div className="container">
        <h2>Acceso a Halcón en Camino</h2>
        <input
          type="tel"
          maxLength="10"
          placeholder="Ingresa tu número"
          onChange={e => setNumero(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </>
  );
}
