const path = require("path");
const router = require("express").Router();

// This ensures that /notes will respond with the notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// This will respond to all other actions with index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
