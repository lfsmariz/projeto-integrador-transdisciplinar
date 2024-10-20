FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código do backend para o diretório de trabalho
COPY . .

# Expõe a porta que o aplicativo irá usar
EXPOSE 3000