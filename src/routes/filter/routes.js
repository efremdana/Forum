import express from "express";
import commentController from "../../domain/comments/controller.js";

const router = express.Router();

router.get(
    '/analytic/comments/',
    async (
        req,
        res,
        next,
    ) => {
        try {
            const { dateForm, dateTo } = req.query;
            const comments = await commentController.getFromTo(dateForm, dateTo);
            return res.send(comments);
        } catch (err) {
            next(err)
        }
    }
)

export default router;
