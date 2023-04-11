# Use una imagen oficial de Node.js como base
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm ci

# Copiar el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Compilar el proyecto
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación (cámbialo si es diferente en tu caso)
EXPOSE 3000

# Ejecutar la aplicación
CMD ["npm", "start"]
