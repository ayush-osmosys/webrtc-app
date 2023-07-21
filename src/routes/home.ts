import { Router } from "express";
import { v4 } from "uuid";
const router = Router();

router.get("/", (req, res) => {
  res.redirect(`/${v4()}`);
});

router.get("/:id", (req, res) => {
  res.render("room", { roomId: req.params.id });
});
export default router;
