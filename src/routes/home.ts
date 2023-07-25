import { Router } from "express";
import { v4 as uuid } from "uuid";
import base64url from "base64url";
import { createHash } from "crypto";

const router = Router();

function generateShortIdentifier(input: string, length: number) {
  const hash = createHash("sha256").update(input).digest("hex");
  return hash.substr(0, length);
}

router.get("/", (req, res) => {
  const shortId = generateShortIdentifier(uuid(), 5);
  res.redirect(`/${shortId}`);
});

router.get("/:roomid", (req, res) => {
  res.render("room", { roomId: req.params.roomid });
});
export default router;
