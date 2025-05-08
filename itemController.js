const Item = require('../models/Item');

// Create: Add a found item
exports.addItem = async (req, res) => {
    try {
        const { itemName, description, locationFound, dateFound } = req.body;
        if (!itemName || !description || !locationFound || !dateFound) {
            return res.status(400).json({ message: 'All fields are required'});
        }

        const newItem = new Item ({ itemName, description, locationFound, dateFound });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Read: View all unclaimed items
exports.getUnclaimedItems = async (req, res) => {
    try {
        const items = await Item.find({ claimed: false });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Read: View one item by ID
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return
        res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};


// Update: Modify item or mark as claimed
exports.updateItem = async (req, res) => {
    try {
        const updateItem = await Item.findByIdAndUpdate(req.params.id, req.body,{ new: true });
        if (!updatedItem) return
        res.status(404).json({ message: 'Item not found' });
        res.status(200).json({updateItem});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Delete: Remove old/irrelevant entry
exports.deleteItem = async (req, res) => {
    try {
        const deleteItem = await Item.findByIdAndDelete(req.params.id);
        if (!deleteItem) return
        res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};