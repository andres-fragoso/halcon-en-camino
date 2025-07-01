import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Informacion() {
  return (
    <>
      <Head>
        <title>Información del Usuario</title>
        <style>{`
          body {
            background-image: url('/background.jpg');
            background-size: cover;
            background-position: center;
            margin: 0;
            font-family: sans-serif;
            padding-top: 60px;
            color: white;
            text-shadow: 1px 1px 4px black;
          }
          .container {
            padding: 40px;
            background-color: rgba(0,0,0,0.5);
            min-height: 100vh;
          }
          .info-box {
            background-color: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 10px;
            max-width: 600px;
            margin: auto;
          }
        `}</style>
      </Head>
      <Navbar />
      <div className="container">
        <h1>Información del Usuario</h1>
        <div className="info-box">
          <p><strong>Matrícula:</strong> 202501234</p>
          <p><strong>Nombre:</strong> Juan Pérez Ramírez</p>
          <p><strong>Dirección:</strong> Calle Hidalgo #123, Saltillo, Coahuila</p>
          <p><strong>Teléfono:</strong> 844-123-4567</p>
          <p><strong>Ruta Asignada:</strong> Ruta Sur</p>
        </div>
      </div>
    </>
  );
}
