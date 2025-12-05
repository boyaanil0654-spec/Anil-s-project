// ... (previous code)
const Wheel = require('../models/Wheel');

router.get('/:id/export', (req, res) => {
  const wheel = Wheel.export(req.params.id);
  res.json(wheel);
});

router.post('/import', (req, res) => {
  const wheel = Wheel.save(req.body);
  res.json({ id: wheel.id });
});

// Share endpoint (returns a public link)
router.get('/:id/share', (req, res) => {
  res.json({ link: `http://localhost:3000/share/${req.params.id}` });
});

// ... (rest unchanged)