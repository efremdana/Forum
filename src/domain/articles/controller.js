import Article from "./model.js";

async function getAll() {
    try {
        return await Article.findAll();
    } catch (err) {
        console.error("Error in getAll:", err);
        throw err;
    }

}

async function getOne(id){
    try {
        return await Article.findByPk(id);
    } catch (err) {
        console.error(`Error in getOne(${id}):`, err);
        throw err;
    }
}

async function addOne(article) {
    try {
        return await Article.create(article);
    } catch (err) {
        console.error("Error in addOne:", err);
        throw err;
    }
}

async function addAll(articles) {
    try {
        return await Article.bulkCreate(articles);
    } catch (err) {
        console.error("Error in addAll:", err);
        throw err;
    }
}

async function updateByID(articleNew, id) {
    try {
        const [updated] = await Article.update(articleNew, { where: { id } });
        return updated > 0;
    } catch (err) {
        console.error(`Error in updateByID(${id}):`, err);
        throw err;
    }
}

async function deleteByID(id){
    try {
        const deleted = await Article.destroy({ where: { id } });
        return deleted > 0;
    } catch (err) {
        console.error(`Error in deleteByID(${id}):`, err);
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
};