import bcrypt from 'bcrypt'

//---------hashed password------

const hashPassword=async(password)=>{
    try {
        const rounde=10;
        const hashedPassword=await bcrypt.hash(password, rounde);
        return hashedPassword;
        
    } catch (error) {
        console.log("error are occur while hashing password", error)
        
    }
   
}

//------compare Password------
const comparePassword=async(password, hashedpassword)=>{
    return await bcrypt.compare(password, hashedpassword);
}


export {hashPassword, comparePassword}