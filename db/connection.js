import mongoose from "mongoose";


export const myConnection=()=>{
    mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log('Connected to DB successfully in',process.env.CONNECTION_STRING))
    .catch(() => console.log('Error connecting to DB!'))
}