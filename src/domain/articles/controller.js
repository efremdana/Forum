import Article from "model.js";

export async function getAll() {
    return await Article.findAll();
}

export async function getOne(id){
    return await Article.findByPk(id);
}

export async function addOne(article) {
    return await Article.create(article);
}

export async function addAll(articles) {
    return await Article.create(articles);
}

export async function updateByID(articleNew, id) {
    await Article.update(
        articleNew,
        {
            where: {
                id: id,
            },
        }
    );
}

export async function deleteByID(id){
    await Article.destroy(
        {
            where: {
                id: id,
            },
        }
    )
}