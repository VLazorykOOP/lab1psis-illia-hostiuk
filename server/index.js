import express from 'express';
import pool from './db.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/init', async (req, res) => {
    try {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      )
    `);
        res.send('Таблиця users створена або вже існує.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Помилка створення таблиці.');
    }
});

app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Помилка отримання користувачів.');
    }
});

app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;
        await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        res.send('Користувач доданий.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Помилка додавання користувача.');
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.send('Користувач видалений.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Помилка видалення користувача.');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API запущено на порту ${PORT}`));
