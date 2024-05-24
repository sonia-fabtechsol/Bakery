import mongoose from 'mongoose'

const connectDb=async()=>{
    const db=process.env.DATABASE_URL;
    try {
        const dbConnection=await mongoose.connect(db)
        console.log(`database connected successfully to host ${dbConnection.connection.host}`)
        
    } catch (error) {
        console.log("some problem occur while connecting database" ,error)
        
    }

}

export default connectDb