const { Router } = require('express');
const { TodoController } = require('../controllers/');

const router = Router();

router.get('/todos', TodoController.getTodos);
router.post('/todos', TodoController.createTodo);
router.put('/todos/:id', TodoController.updateTodo);
router.delete('/todos/:id', TodoController.deleteTodo);

module.exports = router;
