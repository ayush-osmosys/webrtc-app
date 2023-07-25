import { Router } from "express";
import { v4 as uuid } from "uuid";
const router = Router();

router.get("/", (req, res) => {
  res.redirect(`/${uuid()}`);
});

router.get("/:roomid", (req, res) => {
  res.render("room", { roomId: req.params.roomid });
});
export default router;
