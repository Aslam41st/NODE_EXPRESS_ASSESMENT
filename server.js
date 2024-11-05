const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// get Api
app.get('/api/info/:pathParam', (req, res) => {
    const pathParam = req.params.pathParam;
    const queryParam = req.query.queryParam;

    res.json({
        message: "Successfully retrieved parameters!",
        pathParam: pathParam,
        queryParam: queryParam
    });
});

// post Api
app.post('/api/data', (req, res) => {
    const receivedData = req.body;

    const responseData = [
        { id: 1, ...receivedData },
        { id: 2, ...receivedData }
    ];

    res.json({
        message: "Data received successfully!",
        data: responseData
    });
});