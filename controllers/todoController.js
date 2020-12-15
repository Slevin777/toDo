const { Todo } = require('../models/todo');

//Create todo
const createTodo = async (req, res) => {
  const todo = new Todo(req.body);

  try {
    await todo.save();

    res.status(201).send(todo);
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

//Get todo list
const getTodos = async (req, res) => {
  const todos = await Todo.find().sort('text');

  res.status(200).send(todos);
};

//Update todo
const updateTodo = async (req, res) => {
  const { text, isDone } = req.body;

  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      text,
      isDone,
    },
    { new: true }
  );

  if (!todo) return res.status(404).send('Todo with given ID not found');

  res.status(200).send(todo);
};

//Delete todo
const deleteTodo = async (req, res) => {
  const todo = await Todo.findByIdAndRemove(req.params.id);
  if (!todo) return res.status(404).send('Todo with given ID not found');

  res.status(200).send('Todo was removed');
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
