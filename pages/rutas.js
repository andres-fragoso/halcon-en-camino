import { useRouter } from 'next/router';

export default function Rutas() {
  const router = useRouter();

  return (
    <div>
      <h2>Rutas disponibles</h2>
      <ul>
        <li>Ruta 1 - 7:00 AM</li>
        <li>Ruta 2 - 7:15 AM</li>
        <li>Ruta 3 - 7:30 AM</li>
      </ul>
      <button onClick={() => router.push('/mapa')}>Ver recorrido</button>
    </div>
  );
}
