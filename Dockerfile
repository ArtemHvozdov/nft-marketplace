# Используем официальный Node.js образ
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы
COPY . .

# Открываем порт для Vite (по умолчанию 5173)
EXPOSE 5173

# Запускаем Vite
CMD ["npm", "run", "dev"]
