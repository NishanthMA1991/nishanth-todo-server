const mongoose = require("mongoose");


const Todo = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", Todo);
