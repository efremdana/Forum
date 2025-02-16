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
            const { dateFrom, dateTo } = req.query;

            if (!dateFrom || !dateTo) {
                return res.status(400).json({ error: "Both dateFrom and dateTo are required." });
            }

            const fromDate = new Date(dateFrom);
            const toDate = new Date(dateTo);

            if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
                return res
                    .status(400)
                    .json({ error: "Invalid date format. Use ISO 8601 (e.g., '2024-02-16T12:00:00Z')." });
            }

            if (fromDate > toDate) {
                return res
                    .status(400)
                    .json({ error: "dateFrom must be earlier than or equal to dateTo." });
            }

            const comments = await commentController.getFromTo(fromDate, toDate);
            return res.send(comments);

        } catch (err) {
            next(err);
        }
    }
);

export default router;
