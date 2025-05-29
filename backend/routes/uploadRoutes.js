const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2
const streamfier = require('streamifier');
require('dotenv').config();
const router = express.Router();

//cloudinary configaration
cloudinary.config({
    cloud_name : process.env.CLOUDINERY_CLOUD_NAM,
    api_key : process.env.CLOUDINEY_API_KEY,
    api_secret : process.env.CLOUDINERY_API_SECRET
});

//multer setup using memory storage
const storage = multer.memoryStorage();
const upload = multer({storage})

router.post('/', upload.single('image'), async(req, res)=>{
    try {
        if(!req.file){
           return res.status(404).json({message:'no file uploaded'});
        }
        const streamUpload = (fileBuffer)=>{
            return new Promise((resolve, reject)=>{
                const stream = cloudinary.uploader.upload_stream((error, result)=>{
                    if(result){
                        resolve(result)
                    }else{
                        reject(error)
                    }
                })
                streamfier.createReadStream(fileBuffer).pipe(stream);
            })
        }
        const result = await streamUpload(req.file.buffer)
        res.status(200).json({imageUrl:result.secure_url});
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;