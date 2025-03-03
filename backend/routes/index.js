const express = require('express');
const mongoose = require('mongoose');

const todoText = require('../db/models/todo-schema');

const router = express.Router();
router.use(express.json());

router.get('/showtodo', async (req, res) => {
  try {
    const { priority, sortby = 'title', sortorder = 'asc' } = req.query;
    const query = {};
    if (priority) {
      query.priority = priority;
    }
    // console.log(query);
    // console.log(query);
    const response = await todoText.find(query).sort({ [sortby]: sortorder });
    return res.status(200).json(response);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'notyet todo created', error: err.message });
  }
});

router.get('/gettodoById/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await todoText.findById(id);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      message: 'not find the particular todo item by id ',
      error: err.message,
    });
  }
});

router.post('/addtodo', async (req, res) => {
  try {
    const body = req.body;
    const response = await todoText.create(body);
    return res.status(201).json({ message: 'new TODO added ', data: response });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'could not add new todo ', error: err.message });
  }
});

router.delete('/deletetodo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await todoText.findByIdAndDelete(id);
    return res.status(200).json({ message: 'todo item delted successfully' });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'could not delte todo item', error: err.message });
  }
});

router.patch('/edittodo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const response = await todoText.findByIdAndUpdate(id, body, { new: true });
    if (!response) {
      return res.status(404).json({ message: 'Todo item not found' });
    }
    return res
      .status(200)
      .json({ message: 'Todo updated successfully', data: response });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
