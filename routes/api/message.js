const router = require("express").Router();
const messageService = require("../../services/message");


router.get("/", (req, res, next) => {
    messageService.findAll((err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        };
    });
});

router.get("/:id", (req, res, next) => {
    messageService.findOne(req.params.id, (err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.post("/", (req, res, next) => {
    messageService.putMessage(req.body, (err) => {
        if (!err) {
            res.send("Saved!");
        } else {
            res.status(400);
            res.end();
        }
    })
});

router.put("/:id", (req, res, next) => {
    messageService.updateData(req.params.id, req.body, (err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    })
});

router.delete("/:id", (req, res, next) => {
    messageService.deleteData(req.params.id, (err) => {
        if (!err) {
            res.send("Deleted!");
        } else {
            res.status(400);
            res.end();
        }
    })
});



module.exports = router;