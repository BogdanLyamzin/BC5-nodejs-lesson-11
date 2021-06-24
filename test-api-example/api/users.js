const express = require("express");

const router = express.Router();

const users = [{
    _id: "rdf",
    name: "user name"
}];

router.get("/", async (req, res, next)=>{
    res.json({
        status: "success",
        code: 200,
        data: {
            result: users
        }
    })
});

module.exports = router;