import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifytoken } from "../middleware/auth.js";

const router = express.Router();

//read//

router.get("/", verifytoken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//update//
router.patch("/:is/like", verifytoken, likePost);

export default router;
