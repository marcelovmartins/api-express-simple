// ---------------------------------------------------
// api-express-simple | server.js
// ---------------------------------------------------
const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 8080;

/* ─────────── Dados Mock ─────────── */
const alunos = [
  'Ana',
  'Bruno',
  'Carla',
  'Diego',
  'Eduarda'
];

/* ─────────── Rotas GET ─────────── */
// 1) Home
app.get('/', (_req, res) => {
  res.send('Bem-vindo à API da turma!');
});

// 2) Sobre
app.get('/sobre', (_req, res) => {
  res.send('Essa é uma API feita com Express.js');
});

// 3) Alunos
app.get('/alunos', (_req, res) => {
  res.json(alunos);               // devolve JSON bonitinho
});

// 4) Professor
app.get('/professor', (_req, res) => {
  res.send('Nome do professor: Kaike Covo');
});

// 5) Horário
app.get('/horario', (_req, res) => {
  res.send('Aulas de segunda à sexta, das 19h às 22h');
});

/* ─────────── Sobe o servidor ─────────── */
app.listen(PORT, () => {
  console.log(`🚀  Servidor rodando em http://localhost:${PORT}`);
});