Lunes 2025/01/27
Aplicación de frontend con React y Javascript

# Evaluación Técnica: "Mini API o Aplicación Dinámica"

# Desarrolar App Frontend con React y Javascript


Enunciado de la evaluación técnica:

Crea una pequeña aplicación o servicio que permita realizar lo siguiente:

1. Registrar usuarios: Los datos del usuario deben incluir al menos nombre, correo
electrónico y edad.
2. Listar usuarios registrados: Devuelve todos los usuarios registrados.

# Resolución de la evaluación By Olga Viviana


Estructura del proyecto

plaintext
- myapp/
  - node_modules/
  - public/
  - src/
    - App.js
    - index.js
  - package.json

#-------------------------------------

Paso 1: Instalar Node.js y npm
Asegúrate de tener Node.js y npm instalados en tu máquina. Puedes descargarlos desde la página oficial de Node.js.

#-------------------------------------

Paso 2: Crear una nueva aplicación React
1.	Abre una terminal o línea de comandos.
2.	Utiliza el comando create-react-app para generar una nueva aplicación React:
    bash
    npx create-react-app myapp
3.	Navega al directorio del proyecto:
    bash
    cd myapp

#-------------------------------------

Paso 3: Editar App.js
Abre el archivo App.js y reemplázalo con el siguiente código:

#-------------------------------------

 
Paso 4: Ejecutar la aplicación

En la terminal, ejecuta el siguiente comando para iniciar la aplicación:
    bash
    npm start

 
Esto iniciará tu servidor de desarrollo y abrirá tu aplicación en el navegador en http://localhost:3000.
*automaticamente me abre esta ventana en el navegador
 
#!!!!!!

ERROR:
parece que hay un problema con la dependencia web-vitals Instalando web-vitals manualmente:
Abrir la terminal y navega al directorio del proyecto React.

SOLUCIONADO:
Instala web-vitals manualmente:

    npm install web-vitals
 

Hago la prueba nuevamente y escribo “npm start” y luego enter.

Automaticamente abre el navegador con react.

¡Ahora si funciono! y Nos muestra el logo de React en el navegador web.
 
Después de esta prueba, detengo el servidor: vuelvo a la terminal y sobre la línea presiono las teclas “Ctrl” + “c”

#-------------------------------------
#-------------------------------------


Registrar usuarios

Para registrar usuarios en la aplicación de frontend con React, hay que hacer una modificacion en el archivo *app.js*.
Aquí esta la guia práctica y paso a paso:

#-------------------------------------

Paso 1: Configurar el estado del componente
Ingreso al archivo *app.js* para editarlo
vamos a utilizar *useState* para esto.

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


#-------------------------------------

Arranco el servidor nuevamente: escribo “npm start” en la terminal de Visual Studio Code y luego enter.

Abrirá automáticamente el navegador web.
Ingreso valores en los inputs del navegador web.
 
Presiono el boton “Registrar”

Después de la prueba, detengo el servidor: vuelvo a la terminal y sobre la línea presiono las teclas “Ctrl” + “c”

#-------------------------------------
#-------------------------------------

Subir proyecto a repositorio GITHUB

En mi cuenta en github creo un repositorio nuevo “app-frontend-react-javascript”.

En la terminal de VSCode escribo "git init" y luego enter.

En la terminal de mi proyecto escribo “echo "# app-frontend-react-javascript" >> README.md
” para crear nuevo archivo readme.md. 
(si react había creado un archivo readme.md lo elimino y creo uno nuevo ingresando el comando)

Crear archive .gitignore
Añado las librerias y dependencias

Añadir archivo .gitignore al repositorio web

    git add .gitignore
    git commit -m "Añadiendo .gitignore para excluir dependencias y archivos innecesarios"
    git push

Para añadir el resto de todo el proyecto (el archivo app.js y los archivos .json, css, etc) al Repositorio, escribo en la terminal de Visual Studio los siguientes comandos:

    git add .
    git commit -m "Subiendo los archivos app.js, .json, css, etc primera versión"
    git push


#---------------- FIN ( •̀ᴗ•́ )و ̑̑ ---------------------




