const http = require('http');

// Створення сервера
const server = http.createServer((req, res) => {
  // Встановлення заголовка відповіді
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Виведення тексту
  res.end('Hello World');
});

// Прослуховування на порту 8080
server.listen(8080, () => {
  console.log('Сервер запущено на http://localhost:8080');
});
