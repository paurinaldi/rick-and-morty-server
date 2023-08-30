import express from "express";

const router = express.Router();

router.get("/characters", (req, res) => {
  res.json({ message: "Characters route" });
});

export default router;
