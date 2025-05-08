const express = require('express');
const router = express.Router();
const itemController = require('./itemController');

router.post('/', itemController.addItem);
router.get('/', itemController.getUnclaimedItems);
router.get('/:id', itemController.getItemById);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
