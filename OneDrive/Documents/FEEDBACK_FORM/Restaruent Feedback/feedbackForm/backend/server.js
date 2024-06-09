const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

//USE MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

// endpoint to receive feedback
app.post('/feedback', (req, res) => {
    const feedback = req.body;
    
    // Read existing feedback from feedback.json
    fs.readFile('feedback.json', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Error reading feedback file');
        }

        const feedbacks = err ? [] : JSON.parse(data);
        feedbacks.push(feedback);

        fs.writeFile('feedback.json', JSON.stringify(feedbacks, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing feedback file');
            }
            res.status(201).send('Feedback received');
        });
    });
});

app.get('/feedback', (req, res) => {
    fs.readFile('feedback.json', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.status(200).send([]); // Send empty array if file does not exist
            }
            return res.status(500).send('Error reading feedback file');
        }
        res.send(JSON.parse(data));
    });
});

// START THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
