import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Bienvenida() {
  const router = useRouter();
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
            text-align: center;
            padding: 60px 20px;
            background-color: rgba(0,0,0,0.5);
            min-height: 100vh;
          }
          button {
            padding: 12px 24px;
            margin: 10px;
            font-size: 16px;
            cursor: pointer;
          }
        `}</style>
      </Head>
      <div className="container">
        <h1>Bienvenido a Halcón en Camino</h1>
        <p>¿Qué deseas hacer?</p>
        <button onClick={() => router.push('/rutas')}>Ver rutas escolares</button>
        <button onClick={() => router.push('/quienes-somos')}>Quiénes somos</button>
      </div>
    </>
  );
}
