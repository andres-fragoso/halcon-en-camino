import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Rutas() {
  const router = useRouter();
  const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString());

  const rutas = [
    { id: 1, nombre: "Ruta Norte", salida: "06:50 AM", llegada: "07:20 AM", slug: "norte" },
    { id: 2, nombre: "Ruta Sur", salida: "07:00 AM", llegada: "07:30 AM", slug: "sur" },
    { id: 3, nombre: "Ruta Este", salida: "07:10 AM", llegada: "07:40 AM", slug: "este" },
    { id: 4, nombre: "Ruta Oeste", salida: "07:20 AM", llegada: "07:50 AM", slug: "oeste" },
    { id: 5, nombre: "Ruta Central", salida: "07:30 AM", llegada: "08:00 AM", slug: "central" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHoraActual(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
            padding: 20px;
            background-color: rgba(0,0,0,0.5);
            min-height: 100vh;
          }
          .rutas {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
          }
          .ruta {
            background-color: rgba(255,255,255,0.1);
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
          }
          .animacion {
            display: block;
            margin: 20px auto;
            width: 250px;
          }
          button {
            margin-top: 30px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
          }
        `}</style>
      </Head>
      <div className="container">
        <h2>Rutas disponibles</h2>
        <p>Hora actual: {horaActual}</p>
        <div className="rutas">
          {rutas.map(ruta => (
            <div
              className="ruta"
              key={ruta.id}
              onClick={() => router.push(`/mapas/${ruta.slug}`)}
            >
              <strong>{ruta.nombre}</strong><br />
              Salida: {ruta.salida} | Llegada estimada: {ruta.llegada}
            </div>
          ))}
        </div>
        <img
          className="animacion"
          src="https://media.giphy.com/media/3o6ZsYm5C9Q9ZRx5Wc/giphy.gif"
          alt="Simulación ruta"
        />
        <button onClick={() => router.push('/bienvenida')}>Volver al menú principal</button>
      </div>
    </>
  );
}
