const express = require('express');
const route = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.addItem); // Add item
router.get('/unclaimed', itemController.getUnclaimedItems); // View unclaimed items
router.get('/:id', itemController.getItemById); // View item by ID
router.put('/:id', itemController.updateItem); // Update item
router.delete('/:id', itemController.deleteItem); // Delete item

module.exports = router;