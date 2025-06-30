import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/rutas');
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
