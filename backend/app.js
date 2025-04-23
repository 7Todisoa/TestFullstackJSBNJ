const express = require('express');
const taskRoutes = require('./routes/routes');
const app = express();

/** Middleware */ 
app.use(express.json());

/** Routes */
app.use('/tasks', taskRoutes);

/** fallback */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur!' });
});

module.exports = app;
