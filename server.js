const express = require('express');
const app = express();

// Дані про користувача (прізвище, ім'я)
const user = {
    firstName: 'Вадим',
    lastName: 'Литвин'
};

// Маршрут для відповіді на запит
app.get('/', (req, res) => {
    // Отримуємо поточну дату
    const currentDate = new Date();

    // Формуємо відповідь, яка включає ім'я, прізвище і дату запиту
    res.send(`
        <h1>Прізвище: ${user.lastName}</h1>
        <h1>Ім'я: ${user.firstName}</h1>
        <p>Дата запиту: ${currentDate.toLocaleString()}</p>
    `);
});

// Налаштування порту
const port = 8080;
app.listen(port, () => {
    console.log(`Сервер працює на порту ${port}`);
});
