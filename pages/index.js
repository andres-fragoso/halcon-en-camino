import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
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
          h1 {
            font-size: 3rem;
          }
        `}</style>
      </Head>
      <div className="container">
        <h1>Bienvenido a Halcón en Camino</h1>
        <Link href="/login">Iniciar sesión</Link>
      </div>
    </>
  );
}
