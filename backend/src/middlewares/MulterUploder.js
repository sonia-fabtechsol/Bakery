import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Set the destination folder where uploaded files will be stored
      cb(null, './public/temp');
    },
    filename: function (req, file, cb) {
      // Set the file name for uploaded files
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  

  export const upload = multer({ storage: storage });
