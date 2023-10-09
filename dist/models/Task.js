"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
/*
task
    title
    description
    done
    createdAt
    updatedAt

*/ //task seria el modelo y lo de abajo el schema.
var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    //que no sea nunca null
    unique: true,
    //que no se repita.
    trim: true //Limpia el string (ej: "            HOLA           ".trim == "HOLA")
  },

  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    "default": false //por defecto falso
  }
}, {
  timestamps: true,
  //para que guarde fecha de  creacion y de update.
  versionKey: false //Elimina campo de version
});
/* TAMBIEN SE PUEDE HACER DE ESTA FORMA.
const taskSchema = new Schema(
    {
      title:String,
      description:String,
      done: Bolean
    },
    {
      timestamps: true,
    }
  );
  */
var _default = (0, _mongoose.model)("Task", taskSchema);
exports["default"] = _default;