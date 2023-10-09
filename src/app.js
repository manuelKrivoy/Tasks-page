import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes"
import path from "path"
import connectDB from "./database";
import morgan from "morgan"; //es un middleware

const app = express();

connectDB();

app.set('views', path.join(__dirname, 'views'));
app.engine(
    ".hbs",
    create({
      layoutsDir: path.join(app.get("views"), "layouts"), //porcion de codigo en comun/plantillas
      partialsDir: path.join(app.get("views"), "partials"), //porciones de codigo html
      defaulLayout: "main",
      extname: ".hbs",
    }).engine
  );
  app.set('view engine','.hbs');

  //middlewares
  app.use(morgan('dev')); //registra solicitudes http en la consola
  app.use(express.urlencoded({extended:false})); // para poder leer datos desde un index.html 

//Routes
app.use(indexRoutes);

app.use(express.static(path.join(__dirname,"public")));





export default app;