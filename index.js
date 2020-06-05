import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import data from './data/data.json';

const app = express();
const PORT = 3000;

// This is for making public folder reachable on root /
app.use(express.static("public"));

// This is for making images folder reachable on root /
app.use('/images', express.static('images'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/', (req, res) => 
    //res.send(`a get request with / route on port ${PORT}`)
    res.json(data)
);

// Lets you add a parameter of type "/param" or "dynamic" parameters
app.get('/item/:id', (req, res ) => {
    console.log(req.params.id);
    let user = Number(req.params.id);
    console.log(user);
    console.log(data[user]);
    res.json(data[user]);
})

app.post('/post', (req, res) => 
    res.send(`a post request with /post route on port ${PORT}`)
);

app.put('/put', (req, res) => 
    res.send(`a put request with /post route on port ${PORT}`)
);

app.delete('/delete', (req, res) => 
    res.send(`a delete request with /delete route on port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});