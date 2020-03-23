const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Hello word',
        dia: '23'
    });
});

app.listen(3333);