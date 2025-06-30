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
        <h2>Rutas disponibles</h2>
        <ul>
          <li>Ruta 1 - 7:00 AM</li>
          <li>Ruta 2 - 7:15 AM</li>
          <li>Ruta 3 - 7:30 AM</li>
        </ul>
        <img src="https://media.giphy.com/media/3o6ZsYm5C9Q9ZRx5Wc/giphy.gif" alt="Ruta animada" style={{width: "300px", margin: "20px 0"}} />
        <button onClick={() => router.push('/mapa')}>Ver recorrido</button>
      </div>
    </>
  );
}
