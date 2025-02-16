import express from "express";
import commentController from "../../domain/comments/controller.js";

const router = express.Router();

router.get(
    '/:articleID/comment/:commentID',
    async (
        req,
        res,
        next,
    ) => {
        try {
            const { commentID } = req.params;
            const comment = await commentController.getOne(commentID);
            if (!comment)
                return res
                    .status(404)
                    .json(
                        { error: `Comment with id ${commentID} not found` },
                    );
            res.send(comment);
        } catch (err) {
            next(err);
        }

    }
)

router.get(
    '/:articleID/comments',
    async (
        req,
        res,
        next,
    ) => {
        try {
            const { articleID } = req.params;
            const comments = await commentController.getAll(articleID);
            res.send(comments);
        } catch (err) {
            next(err);
        }
    }
)

router.post(
    '/:articleID/comment',
    async (
        req,
        res,
        next,
    ) => {
        try {
            const { commentText } = req.body;
            const { articleID } = req.params;

            if (!commentText) {
                return res.status(400).json({ error: "Text are required." });
            }

            const newComment = await commentController.addOne(
                {
                    text: commentText,
                    article_id: articleID
                },
            );

            res.status(201).json(newComment);
        } catch (err) {
            next(err);
        }
    }
)

router.patch(
    '/:articleID/comment/:commentID',
    async (
        req,
        res,
        next,
    ) => {
        try {
            const { commentText } = req.body;
            const { commentID, articleID } = req.params;

            if (!commentText) {
                return res.status(400).json({ error: "Text are required." });
            }

            const numberUpdated = await commentController.updateByID(
                {
                    text: commentText,
                    article_id: articleID
                },
                commentID,
            );
            if (!numberUpdated)
                return res
                    .status(404)
                    .json(
                        {
                            error: `Comment with id ${commentID} not found`,
                        }
                    );

            res.status(200).json(numberUpdated);
        } catch (err) {
            next(err);
        }
    }
)

router.delete(
    '/:articleID/comment/:commentID',
    async (
        req,
        res,
        next,
    ) => {
        try {
            const { commentID } = req.params;

            const numberDeleted = await commentController.deleteByID(commentID);
            if (!numberDeleted)
                return res
                    .status(404)
                    .json(
                        {
                            error: `Comment with id ${commentID} not found`,
                        }
                    );

            res.status(200).json(numberDeleted);
        } catch (err) {
            next(err);
        }
    }
)

export default router;