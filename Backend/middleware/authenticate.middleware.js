//middlwares/authenticate.middleware.js

const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        const decoded = jwt.verify(token, "bechef")
        if (decoded) {
            const userID=decoded.userID
            console.log(decoded,userID)
            req.body.userID=userID
            next()
        } else {
            res.send("Please Login")
        }
    } else {
        res.send("Please Login")
    }
}

module.exports = {
    authenticate
}