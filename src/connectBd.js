const sqlite3 = require('sqlite3').verbose();

// Подключение к базе данных
const db = new sqlite3.Database('./src/db/main.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected toSQlite database.');
});

// Закрытие базы данных при завершении работы приложения
process.on('exit', () => {
    db.close((err) => {
        if (err) {
            console.error('Failed to close database', err.message);
        } else {
            console.log('Database closed');
        }
    });
});

export default db;