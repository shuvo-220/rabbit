const express = require('express');
const User = require('../models/User');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/', protect, admin, async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;


router.post('/', protect, admin, async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ message: 'user already exist' });
        }
        user = new User({
            name, email, password, role: role || 'customer'
        })
        await user.save();
        res.status(200).json({ message: 'User created successfully', user });
    } catch (error) {
        console.log(error.message);
    }
});


router.put('/:id', protect, admin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            user.role = req.body.role || user.role
        }
        const updateUser = await user.save();
        res.json({ message: 'user update successfully', updateUser });
    } catch (error) {
        console.log(error.message);
    }
})

router.delete('/:id', protect, admin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            await user.deleteOne();
            res.status(200).json({ message: 'user deleted successfully' });
        } else {
            res.status(404).json({ message: 'user not found' });
        }
    } catch (error) {
        console.log(error.message);
    }
})




