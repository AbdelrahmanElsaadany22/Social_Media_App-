import express from 'express'
import "dotenv/config"
import { myConnection } from './db/connection.js'
import bootstrap from './src/bootstrab.js'
import { v2 as cloudinary } from 'cloudinary'
import bodyParser from 'body-parser'

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
  });


const app = express()
app.use(express.static('upload'))
app.use(bodyParser.json());

myConnection()
bootstrap(app)

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))