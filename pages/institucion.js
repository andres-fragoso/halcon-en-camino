import Head from 'next/head';

import Navbar from '../components/Navbar';

export default function Institucion() {
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
            padding: 40px;
            text-align: center;
            background-color: rgba(0,0,0,0.5);
            min-height: 100vh;
          }
          img {
            margin-top: 20px;
            max-width: 300px;
          }
        `}</style>
      </Head>
      <Navbar />
      <div className="container" style={{ paddingBottom: '60px' }}>
        <h1>Información Institucional</h1>
        <p>
          La Universidad Tecnológica de Corregidora (UTC) es una institución comprometida con la educación 
          tecnológica de calidad. A través del proyecto <strong>Halcón en Camino</strong>, buscamos mejorar 
          la seguridad y el monitoreo del transporte escolar para nuestros estudiantes.
        </p>
        <p>
          Este sistema permite visualizar en tiempo real el recorrido de las rutas escolares, ayudando 
          a padres, alumnos y personal académico a conocer la ubicación del transporte y sus horarios estimados.
        </p>
        <img src="/logo_utc.jpg" alt="Logo UTC" />
      </div>
    </>
  );
}
