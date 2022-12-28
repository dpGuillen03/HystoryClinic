import express  from "express"
import cors from "cors"
import db from "./database/db.js"
import rutas from "./routes/routes.js"
import bodyParser from "body-parser"



const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.json())
app.use('/api', rutas)

try {
   await db.authenticate()
   console.log('conexion establecida con exito')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

/**app.get('/', (req, res) => {
    res.send("estamos ready!")

})*/

app.listen(8000, () => {
    console.log('App http://localhost:8000/');
});