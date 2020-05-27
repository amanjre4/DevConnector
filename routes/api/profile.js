const express = require('express');

const router = express.Router();

// @route  Get api/profile/me
// @desc   Test route
// @access public

router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;