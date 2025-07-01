import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar">
      <style jsx>{`
        .navbar {
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: space-around;
          padding: 10px 0;
          z-index: 1000;
        }
        .nav-button {
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
        }
        .nav-button:hover {
          text-decoration: underline;
        }
      `}</style>
      <Link href="/bienvenida" className="nav-button">Inicio</Link>
      <Link href="/rutas" className="nav-button">Rutas</Link>
      <Link href="/quienes-somos" className="nav-button">Quiénes Somos</Link>
      <Link href="/informacion" className="nav-button">Información</Link>
      <Link href="/emergencia" className="nav-button">Emergencia</Link>
    </div>
  );
}
