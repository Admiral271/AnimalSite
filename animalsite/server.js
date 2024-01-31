const express = require('express');
const app = express();
const port = 3000;

// Обслуживание статических файлов из папки 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Отправка файла 'index.html' в ответ на запрос к главной странице
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log("Server listening at http://localhost:" + port);
});
