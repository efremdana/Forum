import Comment from "model.js";

export async function getAll() {
    return await Comment.findAll();
}

export async function getOne(id){
    return await Comment.findByPk(id);
}

export async function addOne(comment) {
    return await Comment.create(comment);
}

export async function addAll(comments) {
    return await Comment.create(comments);
}

export async function updateByID(commentNew, id) {
    await Comment.update(
        commentNew,
        {
            where: {
                id: id,
            },
        }
    );
}

export async function deleteByID(id){
    await Comment.destroy(
        {
            where: {
                id: id,
            },
        }
    )
}