import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Page() {
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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
          }
          h2 {
            font-size: 2.5rem;
          }
        `}</style>
      </Head>
      <div className="container">
        <h2>Iniciar sesión</h2>
        <button onClick={() => router.push('/rutas')}>Entrar</button>
      </div>
    </>
  );
}
