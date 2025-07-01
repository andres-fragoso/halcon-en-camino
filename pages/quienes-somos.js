import { useRouter } from 'next/router';
import Head from 'next/head';

export default function QuienesSomos() {
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
            padding: 40px;
            background-color: rgba(0, 0, 0, 0.5);
            min-height: 100vh;
          }
          h1 {
            font-size: 2.5rem;
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
        <h1>¿Quiénes Somos?</h1>
        <p>
          <strong>"Halcón en Camino" – Transporte Escolar Seguro y Monitoreado</strong>
        </p>
        <p>
          En un mundo cada vez más conectado, la seguridad y tranquilidad de las familias es una prioridad.
          Por ello nace "Halcón en Camino", una innovadora aplicación móvil diseñada para monitorear en tiempo
          real el transporte escolar de niños, niñas y jóvenes, desde el momento en que salen de casa hasta su
          llegada segura a la institución educativa, y viceversa.
        </p>
        <p>
          Este proyecto ofrece un sistema eficiente de rutas escolares organizadas, donde cada unidad de transporte
          cuenta con geolocalización en vivo, horarios de salida y llegada precisos, así como notificaciones automáticas
          que informan a los padres o tutores del estado del trayecto.
        </p>
        <p>
          Gracias a "Halcón en Camino", los usuarios pueden visualizar en el mapa la ubicación exacta del transporte,
          saber cuánto tiempo falta para su llegada, e incluso recibir alertas ante cualquier desvío o eventualidad.
        </p>
        <p>
          <strong>Entre los beneficios clave de esta solución destacan:</strong>
          <ul>
            <li>Seguridad y tranquilidad para las familias, al tener información actualizada del paradero de sus hijos.</li>
            <li>Optimización de rutas escolares para mayor puntualidad y eficiencia.</li>
            <li>Comunicación directa entre padres, conductores y responsables del transporte.</li>
            <li>Historial de trayectos y reportes para mejorar continuamente el servicio.</li>
          </ul>
        </p>
        <p>
          "Halcón en Camino" no solo moderniza la manera en que los estudiantes se transportan, sino que también
          construye un entorno más confiable, organizado y humano en la comunidad educativa.
        </p>
        <button onClick={() => router.push('/bienvenida')}>Volver</button>
      </div>
    </>
  );
}
