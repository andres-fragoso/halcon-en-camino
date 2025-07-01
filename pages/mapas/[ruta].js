import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'leaflet/dist/leaflet.css';

const Map = dynamic(() => import('../../components/MapRuta'), { ssr: false });

export default function RutaMapa() {
  const router = useRouter();
  const { ruta } = router.query;

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
            min-height: 100vh;
            padding: 20px;
            background-color: rgba(0,0,0,0.5);
          }
          button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
          }
        `}</style>
      </Head>
      <div className="container">
        <h2>Mapa de Ruta: {ruta}</h2>
        <Map ruta={ruta} />
        <button onClick={() => router.push('/rutas')}>Volver a rutas</button>
      </div>
    </>
  );
}
