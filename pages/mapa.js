import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const Map = dynamic(() => import('../components/MapView'), { ssr: false });

export default function Mapa() {
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
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
          }
          h2 {
            text-align: center;
            padding: 10px;
          }
        `}</style>
      </Head>
      <div className="container">
        <h2>Mapa en tiempo real</h2>
        <Map />
      </div>
    </>
  );
}
