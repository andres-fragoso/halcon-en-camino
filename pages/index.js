import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a Halcón en Camino</h1>
      <Link href="/login">Iniciar sesión</Link>
    </div>
  );
}
