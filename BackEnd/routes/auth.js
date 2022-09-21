const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "fai544"
// post method fo creating user 
router.post('/createuser', [body('name').isLength({ min: 3 }), body('email').isEmail(), body('password').isLength({ min: 8 })], async (req, res) => {

    // if there are errors return bad request request 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // check if user exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry email already exists" });
        } else {
            // create user
            const salt = await  bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass
            })
            const data = {
                user: {
                    id : user.id
                }
            }
            const authToken = jwt.sign(data , JWT_SECRET);
                res.json({authToken});

        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

    // using then and catch
    // .then(user => res.json(user)).catch(err=>{console.log(err)
    // res.json({error: "please enter unique email"})});
});


module.exports = router;