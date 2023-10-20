const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const DB = {
    games: [
        {
            id: 23,
            title: 'Call od duty MW',
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: 'Sea of thieves',
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: 'Minecraft',
            year: 2012,
            price: 20
        },
    ]
}

app.get('/games', (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});