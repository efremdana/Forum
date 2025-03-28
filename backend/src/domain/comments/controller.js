import { Comment, Article } from "../models.js";
import {Op} from "sequelize";

async function getAll(articleID) {
    try {
        return await Comment.findAll({
            where: { article_id: articleID },
            include: [{ model: Article, as: "article" }],
        });
    } catch (err) {
        console.error("Error in getAll:", err);
        throw err;
    }

}

async function getOne(id){
    try {
        return await Comment.findByPk(id, {
            include: [{ model: Article, as: "article" }],
        });
    } catch (err) {
        console.error(`Error in getOne(${id}):`, err);
        throw err;
    }
}

async function addOne(comment) {
    try {
        return await Comment.create(comment);
    } catch (err) {
        console.error("Error in addOne:", err);
        throw err;
    }
}

async function addAll(comments) {
    try {
        return await Comment.bulkCreate(comments);
    } catch (err) {
        console.error("Error in addAll:", err);
        throw err;
    }
}

async function updateByID(commentNew, id) {
    try {
        const [updated] = await Comment.update(commentNew, { where: { id } });
        return updated > 0;
    } catch (err) {
        console.error(`Error in updateByID(${id}):`, err);
        throw err;
    }
}

async function deleteByID(id){
    try {
        const deleted = await Comment.destroy({ where: { id } });
        return deleted > 0;
    } catch (err) {
        console.error(`Error in deleteByID(${id}):`, err);
        throw err;
    }
}

async function getFromTo(dateFrom, dateTo) {
    try {
        return await Comment.findAll(
            {
                where: {
                    createdAt: {
                        [Op.between]: [new Date(dateFrom), new Date(dateTo)],
                    },
                },
                include: [{model: Article, as: "article"}]
            }
        );
    } catch (err) {
        console.error(`Error in getByDateRange(${dateFrom}, ${dateTo}):`, err);
        throw err;
    }
}

export default {
    getAll,
    getOne,
    addOne,
    addAll,
    updateByID,
    deleteByID,
    getFromTo,
};