import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    filename: function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer({storage});

export default upload



// import multer from 'multer';
// import path from 'path';

// // Set up the storage configuration
// const storage = multer.diskStorage({
//     // Specify the destination folder to store uploaded files
//     destination: function(req, file, cb) {
//         // You can change 'uploads/' to any folder you'd like
//         cb(null, 'uploads/');
//     },
//     // Define the filename for uploaded files
//     filename: function(req, file, cb) {
//         // You can add any logic for filenames here, e.g., using the current timestamp
//         cb(null, Date.now() + path.extname(file.originalname));  // This will ensure unique filenames
//     }
// });

// // File type validation: Only allow image files
// const fileFilter = (req, file, cb) => {
//     const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);  // Accept the file
//     } else {
//         cb(new Error('Only image files are allowed'), false);  // Reject the file
//     }
// };

// // Initialize multer with the storage configuration and file filter
// const upload = multer({ 
//     storage: storage,
//     fileFilter: fileFilter,  // Apply file type validation
//     limits: { fileSize: 5 * 1024 * 1024 }  // Optional: Limit the file size to 5 MB
// });

// export default upload;
