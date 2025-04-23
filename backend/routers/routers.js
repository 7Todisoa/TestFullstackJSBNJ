const express = require('express');
const router = express.Router();
const { getTasks, createTask, removeTask } = require('../controllers/controller');
const { validateTask } = require('../validators/validator');
const { validationResult } = require('express-validator');
const apiKeyFake = require('../middlewares/apiKey');

/** Auth factice */ 
router.use(apiKeyFake);

//** GET /tasks */ 
router.get('/', getTasks);

/** POST /tasks */ 
router.post('/', validateTask, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, createTask);

/** DELETE /tasks/:id */ 
router.delete('/:id', removeTask);

module.exports = router;