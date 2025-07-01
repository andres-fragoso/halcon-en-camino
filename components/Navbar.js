import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 10px;
          display: flex;
          justify-content: center;
          z-index: 1000;
        }
        .nav-link {
          margin: 0 15px;
          text-decoration: none;
          color: white;
          font-weight: bold;
        }
        .nav-link:hover {
          text-decoration: underline;
        }
      `}</style>
      <Link href="/bienvenida" className="nav-link">Inicio</Link>
      <Link href="/rutas" className="nav-link">Rutas</Link>
      <Link href="/quienes-somos" className="nav-link">Quiénes Somos</Link>
      <Link href="/informacion" className="nav-link">Información del Usuario</Link>
    </nav>
  );
}
