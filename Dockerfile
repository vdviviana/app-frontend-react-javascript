# Usar una imagen base de Node.js
FROM node:14-alpine

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo.
COPY package*.json ./

# Instalar las dependencias definidas en package.json.
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construye la aplicación para producción.
RUN npm run build

# Instala el paquete serve globalmente para servir la aplicación.
RUN npm install -g serve

# Exponer el puerto en el que correrá la aplicación
EXPOSE 5000

# Comando para iniciar el servidor web estático y servir la aplicación en el puerto 5000.
CMD ["serve", "-s", "build", "-l", "5000"]


