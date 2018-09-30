const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('*', (req, res) => {
  // throw new Error('Oops');
  res.render('index');
});

module.exports = router;
