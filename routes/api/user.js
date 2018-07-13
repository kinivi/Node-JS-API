const router = require("express").Router();
const userService = require("../../services/user");


router.get("/", (req, res, next) => {
    userService.findAll((err, data) => {
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
    userService.findOne(req.params.id, (err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.get("/:id/contacts", (req, res, next) => {
    userService.findContacts(req.params.id, (err, data) => {
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
    userService.putUser(req.body, (err) => {
        if (!err) {
            res.send("Saved!");
        } else {
            res.status(400);
            res.end();
        }
    })
});

router.put("/:id", (req, res, next) => {
    userService.updateData(req.params.id, req.body, (err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    })
})

router.delete("/:id", (req, res, next) => {
    userService.deleteData(req.params.id, (err) => {
        if (!err) {
            res.send("Deleted!");
        } else {
            res.status(400);
            res.end();
        }
    })
})



module.exports = router;