const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const dataFilePath = path.join(__dirname, 'data.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.post('/submit-form', (req, res) => {
    const formData = req.body;
    let data = [];
    if (fs.existsSync(dataFilePath)) {
        const rawData = fs.readFileSync(dataFilePath);
        data = JSON.parse(rawData);
    }
    data.push(formData);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    res.sendStatus(200);
});


app.get('/get-data', (req, res) => {
    if (fs.existsSync(dataFilePath)) {
        const rawData = fs.readFileSync(dataFilePath);
        const data = JSON.parse(rawData);
        console.log(data);
        res.json(data);
    } else {
        res.json([]);
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
