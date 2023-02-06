const express = require('express');

const app = express();

app.get("/courses", (require, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]);
});


app.post("/courses", (require, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"

    ]);
});

app.put("/courses/:id", (require, response) => {
    const params = require.params
    console.log(params);

    return response.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
});

app.patch("/courses/:id", (require, response) => {
    return response.json([
        "Curso 6",
        "Curso 7",
        "Curso 3",
        "Curso 4"
    ]);
});

app.delete("/courses/:id", (require, response) => {
    return response.json([
        "Curso 6",
        "Curso 2",
         "Curso 4"
    ]);
});

app.listen(3333);
