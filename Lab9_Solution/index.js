const express = require('express');
const multer = require('multer');
const fs = require('fs');
const PORT = 5051;
const app = express();
let upload = multer({dest: './uploads/'});

app.post("/processForm", upload.single('user_image'), (req, res) => {
    
    let first_name = req.body.firstName;
    let last_name = req.body.name;
    let description = req.body.description;
    let image = req.body.image;
    let gender = req.body.gender;
    let date = req.body.date;
    let color = req.body.color;
    let path = "./uploads/" + first_name + ".html";
    if (fs.existsSync(path)) {
        res.sendFile(path, { root: __dirname});
        console.log("File already exists!!!");
    }
    else {
        let html = `<html><img src="${image}"><h1>${first_name}</h1><p>${description}</p><p>${gender}</p><p style="background-color:${color}">${date}</p></html>`;
        fs.writeFile(path, html, () => {
            console.log("File created successfully!");
        });
        res.send(html);
    }
})

const myServer = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})