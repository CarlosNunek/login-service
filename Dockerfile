# Etapa base
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto
EXPOSE 4000

# Comando de inicio
CMD ["node", "index.js"]
