import express from "express";
import articleController from "../../domain/articles/controller.js";

const router = express.Router();

router.get(
    '/article/:articleID',
    async (
        req,
        res,
        next,
    ) => {
        try {
            const article = await articleController.getOne(req.params.articleID);
            if (!article)
                return res
                    .status(404)
                    .json(
                        { error: `Article with id ${req.params.articleID} not found` },
                    );
            res.send(article);
        } catch (err) {
            next(err);
        }

    }
)

router.get(
    '/articles',
     async (
        req,
        res,
        next,
    ) => {
        try {
            const articles = await articleController.getAll();
            res.send(articles);
        } catch (err) {
            next(err);
        }
    }
)

router.post(
    '/article',
    async (
        req,
        res,
        next,
    ) => {
        try {
            const { name, text } = req.body;

            if (!name || !text) {
                return res.status(400).json({ error: "Name and text are required." });
            }


            const newArticle = await articleController.addOne(
                {
                    name,
                    text
                },
            );

            res.status(201).json(newArticle);
        } catch (err) {
            next(err);
        }
    }
)

router.patch(
    '/article/:articleID',
    async (
        req,
        res,
        next,
    ) => {
        try {
            const { name, text } = req.body;
            const { articleID } = req.params;

            if (!name && !text) {
                return res.status(400).json({ error: "Name and text are required." });
            }

            const numberUpdated = await articleController.updateByID(
                {
                    name,
                    text
                },
                articleID,
            );
            if (!numberUpdated)
                return res
                    .status(404)
                    .json(
                        {
                            error: `Article with id ${articleID} not found`,
                        }
                    );

            res.status(200).json(numberUpdated);
        } catch (err) {
            next(err);
        }
    }
)

router.delete(
    '/article/:articleID',
    async (
        req,
        res,
        next,
    ) => {
        try {
            const { articleID } = req.params;

            const numberDeleted = await articleController.deleteByID(articleID);
            if (!numberDeleted)
                return res
                    .status(404)
                    .json(
                        {
                            error: `Article with id ${articleID} not found`,
                        }
                    );

            res.status(200).json(numberDeleted);
        } catch (err) {
            next(err);
        }
    }
)

export default router;