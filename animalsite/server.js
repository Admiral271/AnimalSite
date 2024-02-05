const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');

const { createUsers, createAdmins, createToys, createClothings, createFeeds, createAccessories } = require('../animalsite/public/factories.js');
const parser = require('./public/parser'); // Подключаем файл с настройкой парсера
const registerRouter = require('./public/register'); // Подключаем файл с обработчиком регистрации
const loginRouter = require('./public/login'); //Подключаем файл с обработчиком авторизации
const profileRouter = require('./public/profile'); // Подключаем файл с обработчиком профиля

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

// Настройка сессий
app.use(session({
  secret: 'TPFtZomp0o',
  resave: false,
  saveUninitialized: true,
}));

function handleDisconnect() {
  // Создание подключения к базе данных
  var connection = mysql.createConnection({  
    host     : 'animalzd.beget.tech',
    user     : 'animalzd_goods',
    password : 'Qwerty12345',
    database : 'animalzd_goods',
  });

  // Подключение к базе данных
  connection.connect(function(err) {
    if (err) {
      console.error('Ошибка подключения: ' + err.stack);
      return;
    }
    console.log('Успешно подключено к базе данных с ID ' + connection.threadId);
  });

  // Обработка ошибок соединения
  connection.on('error', function(err) {
    console.error('Ошибка базы данных: ' + err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Если соединение было потеряно, повторно подключаемся
      handleDisconnect();
    } else {
      throw err;
    }
  });

  // Присваиваем подключение глобальной переменной
  global.db = connection;
}

app.use(parser); // Используем настройки парсера из parser.js
app.use(registerRouter); // Используем маршрут для обработки регистрации
app.use(loginRouter); //Используем маршрут для обработки авторизации
app.use(profileRouter); // Используем маршрут для обработки профиля

// Запускаем функцию обработки подключения
handleDisconnect();

//Заполняем базу данных
// async function createAll() {  
//   await createUsers();
//   await createAdmins();  
//   await createToys();
//   await createClothings();  
//   await createFeeds();
//   await createAccessories();  
//   console.log('Все функции выполнены последовательно');
// }
// createAll().catch((error) => console.error('Ошибка:', error));



// Обслуживание статических файлов из папки 'public'
app.use(express.static('public'));
app.get('/', (req, res) => {
  // Отправка файла 'index.html' в ответ на запрос к главной странице
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log("Server listening at http://localhost:" + port);
});
