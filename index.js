import express from 'express'
import { dbConnection } from './src/db/db_connection.js'
import router from './src/router/routes.js'
const app = express()
const port = 4200
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

dbConnection()
app.listen(port, () => {
    console.log("server is running on port", port)
})

