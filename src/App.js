import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');

  const handleRegister = () => {
    if (!nombre || !correo || !edad || edad <= 0 || !/\S+@\S+\.\S+/.test(correo)) {
      alert('Datos inválidos');
      return;
    }
    const newUser = { nombre, correo, edad };
    setUsers([...users, newUser]);
    setNombre('');
    setCorreo('');
    setEdad('');
  };

  return (
    <div>
      <h1>Aplicación de Frontend con React, JavaScript y CSS</h1>
      <h1>Registrar Usuario</h1>
      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input type="text" placeholder="Correo" value={correo} onChange={e => setCorreo(e.target.value)} />
      <input type="number" placeholder="Edad" value={edad} onChange={e => setEdad(e.target.value)} />
      <button onClick={handleRegister}>Registrar</button>
      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.nombre} - {user.correo} - {user.edad}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
