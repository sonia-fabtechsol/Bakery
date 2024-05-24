import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: "dh9qqmlzr", 
  api_key: "792775545195732", 
  api_secret: "FNzhE_L4gAG73F4HXub_jyEKzFY"
});

const CloudnaryStep=async(localFilePath)=>{
    try {
        if(!localFilePath) {
            console.log("local path not found of file", localFilePath)
            return null;
        }


        const response =await  cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        // console.log("file upload successfully on cloudnary", response.url);
        fs.unlinkSync(localFilePath);
        return response;
        
    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error.message);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
        
    }
}
export {CloudnaryStep}

  