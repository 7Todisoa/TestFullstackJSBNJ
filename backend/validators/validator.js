const { body } = require('express-validator');

exports.validateTask = [
  body('Titre')
    .notEmpty()
    .withMessage('Le titre est obligatoire')
];