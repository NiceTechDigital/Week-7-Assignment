const Item = require('./Item');

exports.addItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUnclaimedItems = async (req, res) => {
  const items = await Item.find({ claimed: false });
  res.json(items);
};

exports.getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  item ? res.json(item) : res.status(404).json({ message: 'Not found' });
};

exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  item ? res.json(item) : res.status(404).json({ message: 'Not found' });
};

exports.deleteItem = async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  item ? res.json({ message: 'Deleted' }) : res.status(404).json({ message: 'Not found' });
};
