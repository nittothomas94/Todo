const { Schema, model } = require('mongoose');
const { data } = require('react-router-dom');

const todoSchema = Schema({
  title: { type: String, requred: true },
  date: String,
  priority: { type: String, default: 'lower' },
  time: { type: String, required: true, default: '10:30:3' },
});

const todoText = model('todos', todoSchema);

module.exports = todoText;
