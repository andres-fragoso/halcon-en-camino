import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/rutas');
    } catch (error) {
      alert('Error al iniciar sesión');
      console.error(error);
    }
  };

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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
          }
          input {
            padding: 8px;
            margin: 5px;
            width: 250px;
          }
        `}</style>
      </Head>
      <div className="container">
        <h2>Iniciar sesión</h2>
        <input type="email" placeholder="Correo" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </>
  );
}
