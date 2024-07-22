const { connection } = require('../config/database');

const multer = require('multer');
const path = require('path');
const fs = require('fs');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads/");
    },
    filename: function (req, file, callback) {
        const uploadDir = 'uploads/';
        const extension = file.originalname.split('.').pop();
        const baseName = file.originalname.substring(0, file.originalname.lastIndexOf('.'));

        fs.readdir(uploadDir, (err, files) => {
            if (err) {
                console.error('Error getting directory information:', err);
                callback(err);
            } else {
                let count = 1;
                let newFileName = file.originalname;

                while (files.includes(newFileName)) {
                    newFileName = `${baseName}_${count}.${extension}`;
                    count++;
                }

                callback(null, newFileName);
            }
        });
    },
});

const upload = multer({ storage: storage });

exports.getFiles = (req, res) => {
    res.sendFile(__dirname + "/uploads/" + req.query.filename);
}

exports.uploadFile = (req, res) => {
    res.send(req.file);
}

exports.updateUserFile = async (req, res) => {
    try {
        const { id, file } = req.body
        const [results] = await connection.promise().query('UPDATE users SET file = ? WHERE id = ?', [file, id])
        res.json({
            message: 'File updated',
            results
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'File update failed',
            error
        })
    }
}

exports.updateProductFile = async (req, res) => {
    try {
        const { id, file } = req.body
        const [results] = await connection.promise().query('UPDATE products SET file = ? WHERE id = ?', [file, id])
        res.json({
            message: 'File updated',
            results
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'File update failed',
            error
        })
    }
}
