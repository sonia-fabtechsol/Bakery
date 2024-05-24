import app from './src/App/app.js';
import dotenv from 'dotenv';
import connectDb from './src/db/database.js';




//config dotenv
dotenv.config()

//database connect
connectDb();


//app listen || server start

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server are running on port number ${PORT}`)
})