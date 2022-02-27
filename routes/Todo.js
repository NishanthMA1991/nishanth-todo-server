const express = require("express");
const router = express.Router();

// these are the controllers
// we will create all of them in the future
const {
  createTodo,
  getAllTodos
} = require("../controllers/Todo");

// to create a todo
router.post("/todo/create/", createTodo);

// to get all the todos
router.get("/todos/", getAllTodos);

// we will export the router to import it in the index.js
module.exports = router;
