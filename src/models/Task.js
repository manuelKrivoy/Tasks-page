import { Schema, model } from "mongoose";

/*
task
    title
    description
    done
    createdAt
    updatedAt

*/

//task seria el modelo y lo de abajo el schema.
const taskSchema = new Schema(
  {
    title:{
        type: String,
        required: true, //que no sea nunca null
        unique:true,   //que no se repita.
        trim: true //Limpia el string (ej: "            HOLA           ".trim == "HOLA")
    },
    description:{
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false //por defecto falso
    },
  },
  {
    timestamps: true, //para que guarde fecha de  creacion y de update.
    versionKey: false //Elimina campo de version
  }
);
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
export default model("Task", taskSchema);
