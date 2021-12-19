const { APIController } = require("api-tools-ts");

const api = new APIController("/random");

api.AddEndPoint("/number", "get", (req, res) => {
    res.json({
        text: "number between 1-10",
        number : Math.round(Math.random() * 10)
    });
});

api.AddEndPoint("/number/:min,:max", "get", (req, res) => {
    let min = Number(req.params.min);
    let max = Number(req.params.max);

    res.json({
        text: "number between",
        number : Math.round(Math.random() * (max-min)) + min
    });
});

api.AddEndPoint("/animal", "get", (req, res) => {
    let animals=["Elephant", "Wuff", "Cat", "Tree"];
    let randomAnimal=animals[Math.floor(Math.random()*animals.length)];

    res.json({
        animal : randomAnimal
    });
});

api.StartServer();