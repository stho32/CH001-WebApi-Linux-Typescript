var APIController = require("api-tools-ts").APIController;
var api = new APIController("/random");
api.AddEndPoint("/number", "get", function (req, res) {
    res.json({
        text: "number between 1-10",
        number: Math.round(Math.random() * 10)
    });
});
api.AddEndPoint("/number/:min,:max", "get", function (req, res) {
    var min = Number(req.params.min);
    var max = Number(req.params.max);
    res.json({
        text: "number between",
        number: Math.round(Math.random() * (max - min)) + min
    });
});
api.AddEndPoint("/animal", "get", function (req, res) {
    var animals = ["Elephant", "Wuff", "Cat", "Tree"];
    var randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    res.json({
        animal: randomAnimal
    });
});
api.StartServer();
