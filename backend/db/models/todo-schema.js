const { Schema, model } = require('mongoose');

const todoSchema = Schema({
  title: { type: String, required: true }, // Fixed typo: "requred" → "required"
  date: String,
  priority: { type: String, default: 'lower' },
  time: { type: String, required: true, default: '10:30:3' },
});

const todoText = model('todos', todoSchema);

module.exports = todoText;
